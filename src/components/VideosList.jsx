import { Link } from "react-router-dom";
import styled from "styled-components";

function VideosList({ videos }) {
  return (
    <List>
      <ul>
        {videos.map((video, index) => {
          const {
            creator,
            id,
            profileImgUrl,
            timeShopItemLists,
            title,
            videoUrl,
          } = video;
          return (
            <li key={index}>
              <Link to={`/video/${videoUrl}`}>
                <div>
                  <img
                    src={`https://i.ytimg.com/vi/${videoUrl}/hq720.jpg`}
                    alt="video"
                  ></img>
                  <div className="video__info">
                    <div className="video__info__profileImg">
                      <img src={profileImgUrl} alt="profile"></img>
                    </div>
                    <div className="video__info__texts">
                      <div className="texts__title">{title}</div>
                      <div className="texts__creator">{creator}</div>
                      <div className="texts__others">
                        <div className="texts__others__views"></div>
                        <div className="texts__others__uploaded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </List>
  );
}

const List = styled.div`
  margin-left: -20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      padding: 0 0 40px 20px;
      img {
        width: 100%;
      }
      .video__info {
        display: flex;
        margin-top: 12px;
        .video__info__profileImg {
          width: 36px;
          margin-right: 12px;
          img {
            border-radius: 50%;
          }
        }
        .video__info__texts {
          .texts__title {
            font-size: 14px;
            margin-bottom: 4px;
          }
          .texts__creator {
            font-size: 12px;
            color: ${(props) => props.theme.youtube_grey};
          }
        }
      }
    }
  }
`;

export default VideosList;
