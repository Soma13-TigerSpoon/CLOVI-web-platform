import { Link } from "react-router-dom";
import styled from "styled-components";

function VideoItemsList({ videoData }) {
  let itemList = getDistinctItemList(videoData);
  console.log(itemList);
  return (
    <Container>
      <H2>영상에 나온 옷들</H2>
      <ul>
        {itemList.map((item, index) => {
          const { brand, color, id, itemImgUrl, name, shops, order, size } =
            item.item;
          return (
            <li key={index}>
              <Link to={`/item/${id}`}>
                <div className="item">
                  <img src={itemImgUrl} alt="item"></img>
                  <div className="item__texts">
                    <div className="item__texts__brand">{brand}</div>
                    <div className="item__texts__name">{name}</div>
                    <div className="item__texts__price">
                      <span className="price__number">
                        {shops[0]
                          ? new Intl.NumberFormat().format(shops[0].price)
                          : 0}
                      </span>
                      <span className="price__currency">원</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
function getDistinctItemList(videoData) {
  if (videoData.timeShopItemLists) {
    let result = {};
    let count = 0;
    for (let i = 0; i < videoData.timeShopItemLists.length; ++i) {
      for (let j = 0; j < videoData.timeShopItemLists[i].items.length; ++j) {
        result[videoData.timeShopItemLists[i].items[j].item.id] =
          videoData.timeShopItemLists[i].items[j];
        count += 1;
      }
    }
    console.log(Object.keys(result).length, count);
    console.log(Object.values(result));
    return Object.values(result);
  } else {
    return [];
  }
}

const H2 = styled.h2`
  /* All Devices */
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    padding-left: 6px;
    font-size: 18px;
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const Container = styled.div`
  /* All Devices */
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  ul {
    margin-left: -18px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      padding: 0 0 30px 18px;
      .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 100%;
        }
        .item__texts {
          margin-top: 15px;
          .item__texts__brand {
            margin-bottom: 6px;
            font-size: 13px;
            text-decoration: underline;
            line-height: 1.2;
            font-weight: 700;
            color: #000;
          }
          .item__texts__name {
            font-weight: 500;
            height: 26px;
            margin-bottom: 14px;
            line-height: 16px;
            padding-right: 10%;
            font-size: 13px;
            color: #5d5d5d;
            word-break: break-all;
          }
          .item__texts__price {
            font-size: 14px;
            line-height: 16px;
            vertical-align: top;
            .price__number {
              font-weight: 600;
            }
            .price__currency {
              font-size: 13px;
            }
          }
        }
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
    ul {
      margin-left: -10px;
      li {
        width: 33.3%;
        padding-left: 10px;
        .item {
          .item__texts {
            padding-left: 10px
          }
        }
      }
    }
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    ul {
      margin-left: -1px;
      li {
        width: 50%;
        padding-left: 1px;
      }
    }
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

export default VideoItemsList;
