import { Link } from "react-router-dom";
import styled from "styled-components";
function TaggedItemList({ items }) {
  //console.log(index);
  return (
    <Clovi>
      <ClvHeader>
        <div className="header__left">
          <img
            className="logo__img"
            alt="logo"
            src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
          ></img>
          <span>자동 검색 서비스</span>
        </div>
      </ClvHeader>
      <ClvMain>
        {items.map((data, index) => (
          <Card key={index}>
            <Link className="itemLink" to={`/item/${data.item.id}`}>
              <div className="item">
                <img
                  className="itemImg"
                  alt="item"
                  src={data.item.itemImgUrl}
                />
                <div className="itemInfo">
                  <div className="itemInfo__left">
                    <div className="itemInfo__left__name">
                      <span>[{data.item.brand}] </span>
                      <span>{data.item.name}</span>
                    </div>
                    <div className="itemInfo__left__colorSize">
                      {data.item.color} / {data.item.size===" " ? '?' : data.item.size}
                    </div>
                  </div>
                  <div className="itemInfo__right">
                    <div className="right__price">
                      {data.affiliationLink
                        ? new Intl.NumberFormat().format(
                            data.affiliationLink.price
                          )
                        : data.item.shops.length > 0
                        ? new Intl.NumberFormat().format(
                            data.item.shops[0].price
                          )
                        : 0}
                      원
                    </div>
                      <a
                        className="right__shopLink"
                        href={data.affiliationLink
                          ? data.affiliationLink.shopUrl
                          : data.item.shops.length > 0
                          ? data.item.shops[0].shopUrl
                          : "판매처를 찾을 수 없습니다."}
                        data-item-id={data.item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          // e.preventDefault();
                        }}
                        type="button"
                      >
                        구매 링크
                        {/* <div className="right__colorSize">구매 링크 가기</div> */}
                      </a>
                  </div>
                  {/* <div className="itemInfo__others">
                    <div className="others__seller">
                      <img
                        className="sellerImg"
                        src={
                          data.affiliationLink
                            ? data.affiliationLink.logoUrl
                            : data.item.shops.length > 0
                            ? data.item.shops[0].logoUrl
                            : ""
                        }
                        alt="seller"
                      />
                      <div className="seller__name">
                        {data.affiliationLink
                          ? data.affiliationLink.name
                          : data.item.shops.length > 0
                          ? data.item.shops[0].name
                          : "판매처를 찾을 수 없습니다."}
                        색상 {data.item.color} / 사이즈 {data.item.size}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </Link>
            {/* <a href="https://naver.com" data-item-id={data.item.id} ></a> */}
          </Card>
        ))}
      </ClvMain>
    </Clovi>
  );
}

const Clovi = styled.div`
  /* All Devices */
  width: 395px;
  min-height: 88px;
  /* height: 100%; */
  /* max-height:  */
  /* border-radius: 10px; */
  /* overflow: hidden; */
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.border_grey};
  background-color: ${(props) => props.theme.background_grey};
  /* box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px; */

  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    border: 0;
    width: 100%;
    min-height: 0;
    /* border-bottom: 1px solid ${(props) => props.theme.border_grey}; */
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const ClvHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 0px 12px;
  background-color: white;
  border-bottom: #f2f2f2 solid 1px;
  .header__left {
    display: flex;
    align-items: center;
    .logo__img {
      width: 54px;
      margin-right: 5px;
    }
    span {
      font-size: 12px;
      font-weight: bold;
      padding-top: 1px;
    }
  }
`;
const ClvMain = styled.div`
  /* All Device */

  padding: 0 9px 9px 9px;
  display: flex;
  max-height: 530px;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 1600px) {
    max-height: 676px;
  }

  /* Large Devices, Wide Screens : ~ 1200px */
  @media only screen and (max-width: 1200px) {
  }
  /* Medium Devices, Desktops : ~ 992px */
  @media only screen and (max-width: 992px) {
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

const Card = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  border-bottom: #f2f2f2 solid 1px;

  .itemLink {
    width: 100%;
    .item {
      background-color: white;
      padding: 8px 14px 8px 8px;
      width: 100%;
      display: flex;
      &:hover {
        /* background-color: #f2f2f2; */
        cursor: pointer;
      }
      .itemImg {
        width: 80px;
        margin-right: 8px;
      }
      .itemInfo {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        .itemInfo__left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .itemInfo__left__name {
            font-size: 14px;
            font-weight: 500;
          }
          .itemInfo__left__colorSize {
            font-size: 13px;
            font-weight: 200;
            color: ${(props) => props.theme.text_grey};
          }
        }
        .itemInfo__right {
          min-width: 76px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: fit-content;
          justify-content: center;
          .right__price {
            font-size: 15px;
            font-weight: 600;
          }
          .right__shopLink {
            display: block;
            margin-top: 10px;
            font-size: 13px;
            font-weight: 500;
            padding: 6px 10px;
            border-radius: 6px;
            border: 1px solid ${(props) => props.theme.clovi_red};
            color: ${(props) => props.theme.clovi_red};
            &:active, &:hover {
              color: white;
              background: ${(props) => props.theme.clovi_red};
            }
            /* &:hover {
              color: white;
              background: ${(props) => props.theme.clovi_red};
            } */
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
    margin-top: 0;
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
  /* Custom, iPhone Retina : ~ 320px */
  @media only screen and (max-width: 320px) {
  }
`;

export default TaggedItemList;
