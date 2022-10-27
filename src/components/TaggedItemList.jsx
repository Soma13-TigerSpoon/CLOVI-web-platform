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
            <a href="naver.com" data-item-id={data.item.id} target="_blank">
              <div className="item">
                <img
                  className="itemImg"
                  alt="item"
                  src={data.item.itemImgUrl}
                />
                <div className="itemInfo">
                  <div className="itemInfo__name">
                    <span >[{data.item.brand}] </span>
                    <span>{data.item.name}</span>
                  </div>
                  <div className="itemInfo__others">
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
                      </div>
                    </div>
                    <div className="others__right">
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
                      <div className="right__colorSize">
                        {data.item.color}/{data.item.size}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Card>
        ))}
      </ClvMain>
    </Clovi>
  );
}

const Clovi = styled.div`
  width: 395px;
  min-height: 88px;
  height: 100%;
  /* max-height:  */
  /* border-radius: 10px; */
  /* overflow: hidden; */
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.border_grey};
  background-color: ${(props) => props.theme.background_grey};
  /* box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px; */
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
`;

const Card = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  border-bottom: #f2f2f2 solid 1px;
  a {
    width: 100%;
  }
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
      flex-direction: column;
      padding: 5px 0px;
      justify-content: space-between;
      .itemInfo__name {
        font-size: 14px;
        font-weight: 500;
      }
      .itemInfo__others {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .others__seller {
          display: flex;
          .sellerImg {
            width: 12px;
            object-fit: contain;
            margin-right: 5px;
          }
          .seller__name {
            font-size: 12px;
            font-weight: 200;
          }
        }
        .others__right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .right__price {
            font-size: 14px;
            font-weight: 600;
          }
          .right__colorSize {
            margin-top: 5px;
            font-size: 12px;
            font-weight: 200;
          }
        }
      }
    }
  }
`;

export default TaggedItemList;
