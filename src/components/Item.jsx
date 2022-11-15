import styled from "styled-components";
import ModelList from "./ModelList";
import YoutubePlayer from "./YoutubeInItemPage";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
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
  const [{ itemImgUrl, brand, name, shops }, setItemData] = useState({});
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
        await fetch("https://api.clovi.app/api/v1/videoItems/" + itemId)
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
        await fetch("https://api.clovi.app/api/v1/item/" + itemId)
      ).json();
      console.log("response:", response);
      setItemData((itemData) => response.data);
    })();
  }, []);

  return (
    <>
      <Header></Header>
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
                              {data.size}Size 착용
                            </div>
                          </div>
                          <div className="card__right">
                            <div className="channelInfo">
                              <div>{data.channelName}</div>
                              <a
                                href={`https://www.youtube.com/watch?v=${data.videoUrl}&t=${data.time}s`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                바로가기
                              </a>
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

const ItemPage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 100px auto 0;
  max-width: 1300px;
  min-width: 900px;
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
        }
      }
    }
  }
`;

export default Item;
