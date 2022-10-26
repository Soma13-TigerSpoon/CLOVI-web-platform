import styled from "styled-components";
import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
function YoutubePlayer({data, modelClick, setModelClick}){
  const [videoUrlId,setVideoUrlId] = useState('');
  const [time,setTime] = useState(0);
  const [player, setPlayer] = useState();
  const width = 600;
  useEffect(()=>{
    if(videoUrlId !== data.videoUrl){
      setVideoUrlId(data.videoUrl);
      setTime(data.time);
    }
  },[data]);
  useEffect(() =>{
    if(modelClick) {
      player?.seekTo(data.time);
      setModelClick(false);
    }
  },[modelClick])
  return <div className="player">
    {(
      <YouTube
        videoId={data.videoUrl}
        opts={{
          width,
          height: width * (9 / 16),
          playerVars: {
            autoplay: 1,
            start: time
          },
        }}
        className="container"
        onReady={(event) => setPlayer(event.target)}
      />
    )}
  </div>
  
}

export default YoutubePlayer;



