import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { useParams, Link } from "react-router-dom";
import VideosList from "./VideosList";
import ItemsList from "./ItemsList";

function Channel() {
  // swiper, pagination
  const pageTitles = ["동영상", "상품"];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + pageTitles[index] + "</span>";
    },
  };

  // getting channel profile from youtube API

  // getting videos and items list from clovi server
  const [items, setItems] = useState([]);
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams();
  

  useEffect(() => {
    const fetchUrl = "https://api.clovi.app/api/v1/search?";
    const qsObj = {
      channel: channelId,
    };
    qsObj["size"] = 200;
    const qs = queryString.stringify(qsObj);
    (async () => {
      const response = await (await fetch(fetchUrl + qs)).json();
      console.log("response:", response);
      // https://test.clovi.app/api/v1/search?channel={A}&parent_category={B}&child_category={C}&page={D}&size={E}&sort={F}
      setItems(response.data.items.content);
      setVideos(response.data.videos.content);
    })();
  }, []);

  console.log(items);
  console.log(videos);

  return (
    <Container>
      <Header>
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
          <div className="header__left__channelName">{channelId}</div>
        </div>
        <div className="header__right"></div>
      </Header>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ChannelProfile className="profile">
            <div className="profile__img">
              <img src={videos.length ? videos[0].profileImgUrl : ''} alt="profile" />
            </div>
            <div className="profile__name">
              <span>{channelId}</span>
            </div>
          </ChannelProfile>
          <VideosList videos={videos}></VideosList>
        </SwiperSlide>
        <SwiperSlide>
          <ItemsList items={items}></ItemsList>
        </SwiperSlide>
      </Swiper>
      <main>
        <ul className="items">
          <li>제품1</li>
        </ul>
      </main>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  padding: 18px 20px;
  height: 60px;
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
        width: 9px;
        path {
          stroke: black;
          stroke-width: 5;
        }
      }
    }
    .header__left__channelName {
      font-weight: bold;
    }
  }
`;

const Container = styled.div`
  /* height: 100%; */
  .swiper {
    /* width: 100%;
  height: 100%; */
    position: relative;
    top: 97px;
  }
  .swiper-slide {
    /* All Device */
    font-size: 18px;
    background: #fff;
    max-height: 100vh;
    overflow-y: scroll;
    /* Custom, iPhone Retina : 320px ~ */
    @media only screen and (min-width: 320px) {
    }
    /* Extra Small Devices, Phones : 480px ~ */
    @media only screen and (min-width: 480px) {
    }
    /* Small Devices, Tablets : 768px ~ */
    @media only screen and (min-width: 768px) {
    }
    /* Medium Devices, Desktops : 992px ~ */
    @media only screen and (min-width: 992px) {
    }
    /* Large Devices, Wide Screens : 1200px ~ */
    @media only screen and (min-width: 1200px) {
    }
    /* text-align: center; */

    /* position: relative; */

    /* Center slide text vertically */
    /* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center; */
  }
  .swiper-pagination {
    position: fixed;
    top: 54px;
    width: 100%;
    background: white;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .swiper-pagination-bullet {
    height: fit-content;
    width: 30%;
    padding: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: ${props => props.theme.youtube_grey};
    opacity: 1;
    background: white;
    border-radius: 0;
    &:active {
      background-color: none;
    }
    bottom: -1px;
  }

  .swiper-pagination-bullet-active {
    border-bottom: solid black 2px;
    color: black;
  }
`;

const ChannelProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  .profile__img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  .profile__name {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default Channel;
