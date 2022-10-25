import styled from "styled-components";
import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
function YoutubePlayer({data}){
  const [player, setPlayer] = useState();
  const width = 600;
  return <div className="player">
      {(
        <YouTube
          videoId={data.videoUrl}
          opts={{
            width,
            height: width * (9 / 16),
            playerVars: {
              autoplay: 1,
              start: data.time
            },
          }}
          className="container"
          onReady={(event) => setPlayer(event.target)}
        />
      )}
    </div>
}

export default YoutubePlayer;



