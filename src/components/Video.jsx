import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Youtube from "./Youtube";
import TaggedItemList from "./TaggedItemList";
import VideoItemsList from "./VideoItemsList";

function Video() {
  const [index, setIndex] = useState(-1);
  const [videoData, setVideoData] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [items, setItems] = useState([]);
  const [buttonClick, setButtonClick] = useState(0);
  let { videoId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (videoData !== null && index > -1) {
      console.log(videoData.timeShopItemLists);
      for (const list of videoData.timeShopItemLists) {
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
        await fetch(process.env.REACT_APP_BASE_API_URL + "v1/videos?videoUrl=" + videoId)
      ).json();
      console.log("response:", response);
      setVideoData((videoData) => response.data);
      let tl = [];
      for (let i = 0; i < response.data.timeShopItemLists.length; ++i) {
        tl.push(parseInt(response.data.timeShopItemLists[i].times.start));
      }
      tl.sort((a, b) => a - b);
      setTimeline(tl);
    })();
  }, []);

  return (
    <>
      <PcHeader>
        <Link to={`/channel/${videoData.creator}`}>
          <div className="header__left">
            <div className="header__left__back">
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
            </div>
            <div className="header__left__channelName">{videoData.creator}</div>
          </div>
          <div className="header__right"></div>
        </Link>
      </PcHeader>
      <VBody>
        <div className="videoSection">
          <MobileHeader>
            <Link to={`/channel/${videoData.creator}`}>
              <div className="header__left">
                <div className="header__left__back">
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
                </div>
                <div className="header__left__channelName">
                  {videoData.creator}
                </div>
              </div>
              <div className="header__right"></div>
            </Link>
          </MobileHeader>
          <Youtube
            videoId={videoId}
            index={index}
            setIndex={setIndex}
            timeline={timeline}
            buttonClick={buttonClick}
          ></Youtube>
          {videoData !== null ? (
            <div className="pc">
              <TaggedItemList items={items}></TaggedItemList>
            </div>
          ) : (
            ""
          )}
        </div>
        {videoData !== null ? (
          <div className="mobile">
            <TaggedItemList items={items}></TaggedItemList>
          </div>
        ) : (
          ""
        )}
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
            <span>{index > -1 ? index + 1 : 0}</span>
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

const PcHeader = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  padding: 24px 30px;
  .header__left {
    display: flex;
    .header__left__back {
      margin-right: 10px;
      .leftIcon {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        z-index: -1;
      }
      svg {
        height: 16px;
        path {
          stroke: black;
          stroke-width: 5;
        }
      }
    }
    .header__left__channelName {
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }
  }
  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    display: none;
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const MobileHeader = styled.header`
  display: none;
  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 5;
    padding: 14px 20px;
    .header__left {
      display: flex;
      .header__left__back {
        margin-right: 10px;
        .leftIcon {
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
          z-index: -1;
        }
        svg {
          height: 16px;
          path {
            stroke: black;
            stroke-width: 5;
          }
        }
      }
      .header__left__channelName {
        font-weight: bold;
        font-size: 16px;
        line-height: 1;
      }
    }
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const DivBtn = styled.div`
  /* All Device */
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
    font-weight: bold;
    margin: 10px;
    padding: 10px;
    .leftIcon {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      z-index: -1;
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

  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    background-color: white;
    padding-bottom: 20px;
    border-top: 1px solid ${(props) => props.theme.border_grey};
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    .indexing {
      font-size: 18px;
    }
    button {
      font-size: 14px;
      margin: 10px 5px;
    }
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const VBody = styled.div`
  /* All Device */
  .mobile {
    border-bottom: 1px solid ${(props) => props.theme.border_grey};
    width: 100%;
    display: none;
  }
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
  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    .pc {
      display: none;
    }
    .mobile {
      display: block;
    }
    padding: 0;
    .videoSection {
      position: sticky;
      top: 0;
      flex-direction: column;
      .player {
        position: sticky;
        top: 0;
        padding: 0;
      }
    }
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

export default Video;
