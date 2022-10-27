import styled from "styled-components";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

function getCurrentIndexByTime(currentItemId, currentTime, timeline) {
  let newCurrentItemId;
  if (currentTime < timeline[0]) {
    newCurrentItemId = -1;
  } else {
    for (let i = timeline.length - 1; i > -1; i--) {
      if (currentTime >= timeline[i]) {
        newCurrentItemId = i;
        break;
      }
    }
  }
  if (newCurrentItemId !== currentItemId) {
    currentItemId = newCurrentItemId;
  }
  return currentItemId;
}

function Youtube({ videoId, index, setIndex, timeline, buttonClick }) {
  const [player, setPlayer] = useState();
  const [elapsed, setElapsed] = useState(0);
  // const width = 800;
  console.log(timeline);
  useEffect(() => {
    console.log("player changed");
    const interval = setInterval(() => {
      const elapsed_sec = Math.floor(player?.getCurrentTime()); // this is a promise. dont forget to await
      setElapsed(elapsed_sec);
      // console.log("setting index...");
      console.log(
        "getcurrindexbytime",
        getCurrentIndexByTime(index, elapsed_sec, timeline)
      );
      setIndex(getCurrentIndexByTime(index, elapsed_sec, timeline));
    }, 100); // 100 ms refresh. increase it if you don't require millisecond precision
    return () => {
      clearInterval(interval);
    };
  }, [player]);

  useEffect(() => {
    console.log("index changed:", index);
    player?.seekTo(timeline[index], true);
  }, [buttonClick]);

  return (
    <Container className="player">
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 0,
          },
        }}
        className="container"
        onReady={(event) => {
          setPlayer(event.target);
          event.target.playVideo();
        }}
      />

      {/* <div style={{ display: "flex", marginBottom: "1em" }}>
        <div>Current Time : {elapsed}</div>
        <div>Current Index : {index}</div>
      </div> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 24px 0 0;
  .container {
    width: 100%;
    aspect-ratio: 16 / 9;
    iframe {
      width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: 1600px) {
      max-width: 1280px;
    }
  }
`;

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
