import profileImg1 from "../assets/profile_img1.png";
import profileImg2 from "../assets/profile_img2.png";
import profileImg3 from "../assets/profile_img3.png";
import profileImg4 from "../assets/profile_img4.png";
import profileImg5 from "../assets/profile_img5.png";
import profileImg5j from "../assets/profile_img5.jpeg";
import profileImg6 from "../assets/profile_img6.jpeg";
import profileImg7 from "../assets/profile_img7.jpeg";
import profileImg8 from "../assets/profile_img8.jpeg";
import profileImg9 from "../assets/profile_img9.jpeg";
import profileImg10 from "../assets/profile_img10.jpeg";
import styled from "styled-components";

const SFilter = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const Creators = styled.div`
  display: flex;
  padding: 14px 10px 4px 10px;
  border: 1px solid ${(props) => props.theme.border_grey};
  li {
    float: left;
    display: flex;
    align-items: center;
    padding: 0px 20px 10px 10px;
    .img-border {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        border-radius: 50%;
      }
    }
    .creator-name {
      font-size: 12px;
      padding-left: 8px;
      color: ${(props) => props.theme.text_grey};
    }
  }
  .selected {
    .creator-name {
      /* text-decoration: underline; */
      color: ${(props) => props.theme.clovi_black};
      font-weight: 600;
    }
    .img-border {
      border: 1.8px solid ${(props) => props.theme.clovi_red};
    }
  }
`;

const SmallCategories = styled.div`
  border: 1px solid ${(props) => props.theme.border_grey};
  margin-top: -1px;
  li {
    float: left;
    a {
      display: inline-block;
      padding: 2px 20px 0;
      line-height: 42px;
      color: ${(props) => props.theme.text_grey};
      font-size: 14px;
      font-weight: 200;
    }
  }
`;

const dummyData = [
  {
    name: "핏더사이즈",
    id: 1,
    profileUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu-opBs4fsY6Vw06U1VMoTpcaepRcYtkmmPSuOl1=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/%ED%95%8F%EB%8D%94%EC%82%AC%EC%9D%B4%EC%A6%88/about",
  },
  {
    name: "킹타쿠Kingtaku",
    id: 3,
    profileUrl:
      "https://yt3.ggpht.com/LFde7BcLM9FPCP8EyPwgEEFZBbeK7JrhvhVtgieYv1C5RNrzLGdBNtxI3Ti_M061AkyRryFyEA=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCN-hIUuioKIUh_K-ip7rchA",
  },
  {
    name: "깡스타일리스트",
    id: 4,
    profileUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu8i1Pn_A2g9ru1wf1RaOE-jduiCJL2lX3WAabrb=s88-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UC8a6z7i9qypp9PqJ_0HhBrw",
  },
  {
    name: "오정규",
    id: 5,
    profileUrl: null,
    url: "https://www.youtube.com/channel/UCjD3iAk_WIUkiUk1tHYP9Cw",
  },
];

const Filters = () => {
  return (
    <SFilter>
      <Creators>
        <ul>
          {dummyData.map((channel) => {
            const { name, id, profileUrl, url } = channel;
            return (
              <li className="creator" key={id}>
                <div className="img-border">
                  <img
                    src={profileUrl}
                    className="creator-profile"
                    alt="creator profile"
                  ></img>
                </div>
                <div className="creator-name">{name}</div>
              </li>
            );
          })}
          {/* <li className="creator selected">
            <div className="img-border">
              <img
                src={profileImg1}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg2}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator selected">
            <div className="img-border">
              <img
                src={profileImg3}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg4}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg5}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg5j}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg6}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg7}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg8}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg9}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li>
          <li className="creator">
            <div className="img-border">
              <img
                src={profileImg10}
                className="creator-profile"
                alt="creator profile"
              ></img>
            </div>
            <div className="creator-name">유튜버</div>
          </li> */}
        </ul>
      </Creators>
      <SmallCategories>
        <ul>
          <li className="small-category">
            <a href="/">전체</a>
          </li>
          <li className="small-category">
            <a href="/">나일론, 코치 재킷</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
        </ul>
      </SmallCategories>
    </SFilter>
  );
};

export default Filters;
