import { Link } from "react-router-dom";
import styled from "styled-components";

function ItemsList({ items }) {
  return (
    <List>
      <ul>
        {items.map((item, index) => {
          const { brand, color, id, itemImgUrl, name, shops, order, size } =
            item;
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
    </List>
  );
}

const List = styled.div`
  /* All Device */
  margin-left: -20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding: 0 0 40px 20px;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        img {
          width: 100%;
        }
        .item__texts {
          padding: 0px 10px;
          margin-top: 15px;
          .item__texts__brand {
            margin-bottom: 7px;
            font-size: 13px;
            text-decoration: underline;
            line-height: 1.2;
            font-weight: 700;
            color: #000;
          }
          .item__texts__name {
            font-weight: 500;
            margin-bottom: 14px;
            line-height: 16px;
            /* padding-right: 10%; */
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
  /* Custom, iPhone Retina : 320px ~ */
  @media only screen and (min-width: 320px) {
    margin-left: -1px;
    ul {
      li {
        padding: 0 0 30px 1px;
      }
    }
  }
  /* Extra Small Devices, Phones : 480px ~ */
  @media only screen and (min-width: 480px) {
  }
  /* Small Devices, Tablets : 768px ~ */
  @media only screen and (min-width: 768px) {
    margin-left: -20px;
    ul {
      li {
        padding: 0 0 40px 20px;
        width: 33.3%;
      }
    }
  }
  /* Medium Devices, Desktops : 992px ~ */
  @media only screen and (min-width: 992px) {
  }
  /* Large Devices, Wide Screens : 1200px ~ */
  @media only screen and (min-width: 1200px) {
    ul {
      li {
        width: 25%;
      }
    }
  }
`;

export default ItemsList;
