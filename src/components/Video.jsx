import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Youtube from "./Youtube";
import TaggedItemList from "./TaggedItemList";
import VideoItemsList from "./VideoItemsList";
import Header from "./Header";

function Video() {
  const [index, setIndex] = useState(-1);
  const [videoData, setVideoData] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [items, setItems] = useState([]);
  const [buttonClick, setButtonClick] = useState(0);
  let { videoId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (videoData !== null && index > -1) {
      console.log(videoData.lists);
      for (const list of videoData.lists) {
        if (list.times.start === timeline[index]) {
          setItems(list.items);
          break;
        }
      }
    }
  }, [index]);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://api.clovi.app/api/v1/videos?videoUrl=" + videoId)
      ).json();
      console.log("response:", response);
      setVideoData((videoData) => response.data);
      let tl = [];
      for (let i = 0; i < response.data.lists.length; ++i) {
        tl.push(parseInt(response.data.lists[i].times.start));
      }
      tl.sort((a, b) => a - b);
      setTimeline(tl);
    })();
  }, []);

  return (
    <>
      <Header></Header>
      <VBody>
        <div className="videoSection">
          <Youtube
            videoId={videoId}
            index={index}
            setIndex={setIndex}
            timeline={timeline}
            buttonClick={buttonClick}
          ></Youtube>
          {videoData !== null ? (
            <TaggedItemList items={items}></TaggedItemList>
          ) : (
            ""
          )}
        </div>
        <DivBtn className="Btn_time">
          <button
            id="left"
            onClick={(e) => {
              if (index > 0) {
                setIndex(index - 1);
                setButtonClick(buttonClick - 1);
              }
              e.currentTarget.blur();
            }}
          >
            <svg
              className="leftIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 80"
            >
              <path
                d="M1 0l40 40.083L1.166 80"
                fill="none"
                fillRule="evenodd"
                stroke="#303033"
                strokeWidth="3"
              ></path>
            </svg>
            <span>이전 옷 보기</span>
          </button>
          <div className="indexing">
            <span>{index > -1 ? index+1 : 0}</span>
            <span className="indexing__slash">/</span>
            <span>{timeline ? timeline.length : 0}</span>
          </div>
          <button
            id="right"
            onClick={(e) => {
              if (index < timeline.length - 1) {
                setIndex(index + 1);
                setButtonClick(buttonClick + 1);
              }
              e.currentTarget.blur();
            }}
          >
            <span>다음 옷 보기</span>
            <svg
              className="rightIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 80"
            >
              <path
                d="M1 0l40 40.083L1.166 80"
                fill="none"
                fillRule="evenodd"
                stroke="#303033"
                strokeWidth="3"
              ></path>
            </svg>
          </button>
        </DivBtn>
        <VideoItemsList
          className="itemSection"
          videoData={videoData}
        ></VideoItemsList>
      </VBody>
    </>
  );
}

const DivBtn = styled.div`
  margin-top: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  .indexing {
    font-size: 24px;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: center;
    .indexing__slash {
      padding: 0 10px;
    }
  }
  button {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin: 10px;
    padding: 10px;
    .leftIcon {
      transform: scaleX(-1);
    }
    span {
      padding: 0 10px;
    }
    svg {
      width: 9px;
      path {
        stroke: black;
        stroke-width: 5;
      }
    }
  }
`;

const VBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 104px 24px 0px 24px;
  .videoSection {
    width: 100%;
    display: flex;
    justify-content: center;
    .player {
      max-width: 1280px;
    }
  }
`;

export default Video;
