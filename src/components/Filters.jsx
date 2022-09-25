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

const Filters = () => {
  return (
    <SFilter>
      <Creators>
        <ul>
          <li className="creator selected">
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
          </li>
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
