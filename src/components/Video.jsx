import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Youtube from "./Youtube";
import TaggedItemList from "./TaggedItemList";
import ItemGrid from "./ItemGrid";
import Header from "./Header";
function Video() {
  const [index, setIndex] = useState(-1);
  const [videoData, setVideoData] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [items, setItems] = useState([]);
  let { videoId } = useParams();

  useEffect(() => {
    if(videoData !== null && index > -1) setItems(videoData.lists[index].items);
  }, [index]);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://api.clovi.app/api/v1/videos?videoUrl=" + videoId)
      ).json();
      console.log("response:", response);
      setVideoData((videoData) => response.data);
      let tl = []
      for (let i = 0; i < response.data.lists.length; ++i) {
        tl.push(parseInt(response.data.lists[i].times.start));
      }
      setTimeline(tl);
    })();
  }, []);

  return (
    <>
      <Header></Header>
      <VBody>
        <div className="ybody">
          <Youtube
            videoId={videoId}
            index={index}
            setIndex={setIndex}
            timeline={timeline}
          ></Youtube>
          {videoData !== null ? (
            <TaggedItemList
              items={items}
            ></TaggedItemList>
          ) : (
            ""
          )}
        </div>
        <div className="yfooter">
          <ItemGrid videoData={videoData}></ItemGrid>
        </div>
      </VBody>
    </>
  );
}

const VBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  .ybody {
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
  }
  .yfooter {
    height: 100px;
  }
`;

export default Video;
