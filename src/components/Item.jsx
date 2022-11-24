import styled from "styled-components";
import ModelList from "./ModelList";
import YoutubePlayer from "./YoutubeInItemPage";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

/**
 * 접속 페이지 : http://localhost:3000/item/89
 */

function filteringTime(videoList) {
  // 필요한 정보만 VideoResponseDtoList에서 추출
  console.log(videoList);
  let result = [];
  for (let i = 0; i < videoList.length; ++i) {
    for (let j = 0; j < videoList[i].timeModelList.length; ++j) {
      result.push({
        index: result.length,
        channelName: videoList[i].creator,
        videoUrl: videoList[i].videoUrl,
        model: videoList[i].timeModelList[j].model,
        time: videoList[i].timeModelList[j].time.start,
      });
    }
  }
  return result;
}
function Item() {
  let { itemId } = useParams();
  const [index, setIndex] = useState(-1);
  const [click, setClick] = useState(false);
  const [{ itemImgUrl, brand, name, shops, size, color }, setItemData] = useState({});
  const [videoData, setVideoData] = useState();
  const videosRef = useRef([]);
  const [playStates, setPlayStates] = useState([]);

  useEffect(() => {
    console.log("index:", index);
    if (videosRef.current.length > 0) {
      console.log(videosRef.current);
      console.log(index);
      const newArr = [];
      for (let i = 0; i < videosRef.current.length; i++) {
        if (i === index) {
          videosRef.current[index].classList.add("visible");
          newArr[i] = true;
        } else {
          videosRef.current[i].classList.remove("visible");
          newArr[i] = false;
        }
      }
      console.log(newArr);
      setPlayStates(newArr);
    }
  }, [index]);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(process.env.REACT_APP_BASE_API_URL + "v1/videoItems/" + itemId)
      ).json();
      console.log("response:", response);
      const dataProcessed = filteringTime(response.data);
      setVideoData((videoData) => dataProcessed);
      console.log(dataProcessed);
      const newArr = [];
      newArr.push(true);
      for (let i = 0; i < dataProcessed.length; i++) {
        console.log(i);
        newArr.push(false);
      }
      console.log(newArr);
      setPlayStates(newArr);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(process.env.REACT_APP_BASE_API_URL + "v1/item/" + itemId)
      ).json();
      console.log("response:", response);
      setItemData((itemData) => response.data);
    })();
  }, []);

  return (
    <>
      {/* <Header>
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
      </Header> */}
      <ItemPage>
        <div className="itemInfo">
          <div className="itemInfo__img">
            <img src={itemImgUrl} alt="Item"></img>
          </div>
          <div className="itemInfo__texts">
            <span className="texts__brand">{brand}</span>
            <span className="texts__name">{name}</span>
            <span className="texts__price">
              {shops ? new Intl.NumberFormat().format(shops[0].price) : 0} 원
            </span>
            <ShopsContainer>
              <div className="box">
                <div className="box__header">
                  <div className="header__left">
                    {/* <img
                      className="logo__img"
                      src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
                      alt="logo"
                    /> */}
                    <span>판매처</span>
                  </div>
                  <div className="header__right">
                    <span>가격</span>
                  </div>
                </div>
                <div className="box__main">
                  {shops
                    ? shops.map((shop, index) => (
                        <a
                          key={index}
                          href={shop.shopUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card">
                            <div className="card__left">
                              <img
                                className="card__left__logoImg"
                                src={shop.logoUrl}
                                alt="Logo"
                              ></img>
                              <div className="card__left__shopName">
                                {shop.name}
                              </div>
                            </div>
                            <span className="card__right">
                              {new Intl.NumberFormat().format(shop.price)} 원
                            </span>
                          </div>
                        </a>
                      ))
                    : "loading"}
                </div>
              </div>
            </ShopsContainer>
          </div>
        </div>
        <div className="youtubeShoppingGuide">
          <div className="youtubeShoppingGuide__title">
            이 아이템이 등장했던 유튜브 영상
          </div>
          <div className="youtubeShoppingGuide__main">
            <div className="main__ytEmbedded">
              {videoData
                ? videoData.map((vd, mapIndex) => (
                    <div
                      className={
                        mapIndex === 0 ? "YtSwitcher visible" : "YtSwitcher"
                      }
                      ref={(el) => (videosRef.current[mapIndex] = el)}
                      key={mapIndex}
                    >
                      <YoutubePlayer
                        key={mapIndex}
                        data={vd}
                        play={playStates.length > 0 ? playStates[mapIndex] : -1}
                        click={click}
                        setClick={setClick}
                      ></YoutubePlayer>
                    </div>
                  ))
                : ""}
            </div>
            <AppearanceList>
              <div className="box">
                <div className="box__header">
                  <div className="header__left">
                    <img
                      className="logo__img"
                      src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
                      alt="logo"
                    />
                    <span>아이템 실착 / 리뷰 가이드</span>
                  </div>
                </div>
                <div className="box__main">
                  {videoData
                    ? videoData.map((data, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setIndex(index);
                            setClick(true);
                          }}
                          className="card"
                        >
                          <div className="card__left">
                            <div className="left__model">
                              <div className="left__model__name">
                                {data.model.name}
                              </div>
                              <div className="left__model__spec">
                                ({data.model.height_cm}cm {data.model.weight_kg}
                                kg)
                              </div>
                            </div>
                            <div className="left__wearing">
                              {color} / {size} 착용
                            </div>
                          </div>
                          <div className="card__right">
                            <div className="right__channelInfo">
                              {/* <div>{data.channelName}</div> */}
                              <Link
                                to={`/video/${data.videoUrl}`}
                                // href={`https://www.youtube.com/watch?v=${data.videoUrl}&t=${data.time}s`}
                                // target="_blank"
                                // rel="noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // e.preventDefault();
                                }}
                              >
                                영상 보러가기
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </AppearanceList>
          </div>
        </div>
      </ItemPage>
    </>
  );
}

const Header = styled.header`
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
`;

const ItemPage = styled.div`
  /* All Device */
  display: flex;
  flex-direction: column;
  margin: 100px auto 0;
  max-width: 1300px;
  /* min-width: 900px; */
  padding: 40px 50px 0;
  .itemInfo {
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    .itemInfo__img {
      width: 47%;
      img {
        width: 100%;
      }
    }
    .itemInfo__texts {
      padding-left: 45px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      .texts__brand {
        padding: 24px 0px;
        border-top: 2px solid ${(props) => props.theme.clovi_black};
        font-size: 22px;
        font-weight: bold;
        text-decoration: underline;
      }
      .texts__name {
        margin-bottom: 30px;
        font-size: 24px;
        font-weight: bold;
      }
      .texts__price {
        padding: 22px 0px;
        text-align: end;
        font-size: 20px;
        font-weight: bold;
        border-top: 1px solid ${(props) => props.theme.price_border_grey};
        border-bottom: 1px solid ${(props) => props.theme.price_border_grey};
      }
    }
  }
  .youtubeShoppingGuide {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .youtubeShoppingGuide__title {
      border-bottom: 4px solid ${(props) => props.theme.clovi_black};
      padding-bottom: 24px;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 15px;
      letter-spacing: -0.5px;
    }
    .youtubeShoppingGuide__main {
      width: 100%;
      padding-top: 30px;
      display: flex;
    }
    .main__ytEmbedded {
      width: 100%;
    }
    .YtSwitcher {
      display: none;
      font-size: 100px;
    }
    .visible {
      display: block;
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
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    padding: 0 20px 30px;
    margin: 0 auto;
    .itemInfo {
      flex-direction: column;
      .itemInfo__img {
        width: 100%;
      }
      .itemInfo__texts {
        padding-left: 0;
        .texts__brand {
          padding: 12px 0;
          font-size: 16px;
        }
        .texts__name {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .texts__price {
          font-size: 18px;
          padding: 14px 0;
        }
      }
    }
    .youtubeShoppingGuide {
      margin-top: 20px;
      .youtubeShoppingGuide__title {
        font-size: 18px;
        padding-bottom: 14px;
      }
      .youtubeShoppingGuide__main {
        padding-top: 0;
        flex-direction: column;
        .main__ytEmbedded {
          margin-left: -20px;
          width: 100vw;
        }
      }
    }
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const CloviBox = styled.div`
  .box {
    width: 395px;
    min-height: 88px;
    max-height: 100%;
    overflow: hidden;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.border_grey};
    background-color: ${(props) => props.theme.background_grey};
    padding-bottom: 5px;
    .box__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 44px;
      box-sizing: border-box;
      padding: 0px 12px;
      background-color: white;
      border-bottom: #f2f2f2 solid 1px;
      span {
        font-size: 14px;
        font-weight: bold;
        padding-top: 1px;
      }
      .header__left {
        display: flex;
        align-items: center;
        .logo__img {
          width: 54px;
          margin-right: 5px;
        }
      }
    }
    .box__main {
      max-height: 300px;
      overflow-y: scroll;
      .card {
        margin: 5px 5px 0px 5px;
        border-bottom: #f2f2f2 solid 1px;
        background-color: white;
        padding: 8px 14px 8px 8px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
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
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    .box {
      width: 100%;
    }
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const ShopsContainer = styled(CloviBox)`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  .box {
    width: 100%;
    .box__header {
      .header__left {
        padding-left: 34px;
      }
      .header__right {
        padding-right: 10px;
      }
    }
  }
  .card__left {
    display: flex;
    align-items: center;
    .card__left__logoImg {
      width: 20px;
      margin-right: 15px;
    }
    .card__left__shopName {
      font-size: 14px;
    }
  }
  .card__right {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
  }
`;

const AppearanceList = styled(CloviBox)`
  .box {
    .box__header {
      .header__left {
        span {
          font-size: 12px;
        }
      }
    }
    .box__main {
      .card {
        padding: 10px;
        &:hover {
          background-color: #f2f2f2;
          cursor: pointer;
        }
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .left__model {
            display: flex;
            margin-bottom: 15px;
            .left__model__name {
              font-size: 14px;
              margin-right: 2px;
            }
            .left__model__spec {
              padding-left: 2px;
              font-size: 12px;
            }
          }
          .left__wearing {
            font-size: 14px;
            font-weight: 600;
          }
        }
        .card__right {
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 13px;
          margin-top: 10px;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 6px;
          border: 1px solid ${(props) => props.theme.clovi_red};
          color: ${(props) => props.theme.clovi_red};
          background: white;
          &:active, &:hover {
            color: white;
            background: ${(props) => props.theme.clovi_red};
          }
          .right__channelInfo {

          }
        }
      }
    }
  }
`;

export default Item;
