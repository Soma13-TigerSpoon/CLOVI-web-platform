import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
function Youtube({ urlId }){
  const [player, setPlayer] = useState();
  const [elapsed, setElapsed] = useState(0);
  const width = 600;
  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await player?.getCurrentTime(); // this is a promise. dont forget to await

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setElapsed(
        min.toString().padStart(2, '0') +
          ':' +
          seconds.toString().padStart(2, '0') +
          ':' +
          ms.toString().padStart(3, '0'),
      );
    }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, [player]);
  
  return <div className="player">
      <div style={{ display: 'flex', marginBottom: '1em' }}>
        <button type="button" onClick={() => player?.seekTo(120, true)}>
          Seek to 2 minutes
        </button><button type="button" onClick={() => console.log(elapsed)}>
          print
        </button>
        <div>{elapsed}</div>
      </div>

      {(
        <YouTube
          videoId={urlId}
          opts={{
            width,
            height: width * (9 / 16),
            playerVars: {
              autoplay: 0,
            },
          }}
          className="container"
          onReady={(event) => setPlayer(event.target)}
        />
      )}
    </div>
}

export default Youtube;
// function YT(){
//   const [elapsed, setElapsed] = useState(0);
//   const playerRef = useRef();
//   useEffect(() => {
//     const interval = setInterval(async () => {
//       const elapsed_sec = await playerRef.current.getCurrentTime(); // this is a promise. dont forget to await

//       // calculations
//       const elapsed_ms = Math.floor(elapsed_sec * 1000);
//       const ms = elapsed_ms % 1000;
//       const min = Math.floor(elapsed_ms / 60000);
//       const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

//       setElapsed(
//         min.toString().padStart(2, '0') +
//           ':' +
//           seconds.toString().padStart(2, '0') +
//           ':' +
//           ms.toString().padStart(3, '0'),
//       );
//     }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   return (<div><div>
//     <YouTubePlayer height={250} ref={playerRef} videoId={'DC471a9qrU4'}/>
//     <text values={playerRef.current}></text>
//     </div><button onClick={() => playerRef.current.seekTo(120, true)}></button>
//     </div>);
// }

