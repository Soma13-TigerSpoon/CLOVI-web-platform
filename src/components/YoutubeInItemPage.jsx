import styled from "styled-components";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
const YoutubePlayer = ({ data, play, click, setClick }) => {
  // const [videoUrlId, setVideoUrlId] = useState("");
  // const [time, setTime] = useState(0);
  const [player, setPlayer] = useState();
  const width = 600;

  // useEffect(() => {
  //   if(play){
  //     player?.playVideo();
  //   }
  // }, []);

  useEffect(() => {
    console.log('dfsdfsf');
    if (play !== -1) {
      if (play){
        console.log('play')
        player?.seekTo(data.time);
        player?.playVideo();
      }else {
        console.log("don't play");
        player?.pauseVideo();
      }
    }
    setClick(false);
  }, [play, click]);

  return (
    <Container className="player">
      {
        <YouTube
          videoId={data.videoUrl}
          opts={{
            width,
            playerVars: {
              autoplay: 0,
              start: data.time,
            },
          }}
          className="container"
          onReady={(event) => setPlayer(event.target)}
        />
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`

export default YoutubePlayer;
