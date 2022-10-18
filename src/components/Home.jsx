import img1 from ".././assets/29cm1.jpeg";
import img2 from ".././assets/29cm2.jpeg";
import img3 from ".././assets/29cm3.jpeg";
import img4 from ".././assets/29cm4.jpeg";
import Header from "./Header";
import Categories from "./Categories";
import Filters from "./Filters";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  padding: 150px 50px 0px 50px;
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const Results = styled.div`
  margin-left: -20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3%;
      padding: 0 0 40px 20px;
      img {
        width: 100%;
      }
      .item__texts {
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
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const OptionButtons = styled.div`
  padding: 24px 0px 18px 0px;
  button {
    margin-right: 18px;
    width: 80px;
    height: 30px;
    font-size: 12px;
    font-weight: 300;
    border: 1px solid ${(props) => props.theme.clovi_black};

    &:hover {
      color: ${(props) => props.theme.clovi_white};
      background-color: ${(props) => props.theme.clovi_black};
      font-weight: 600;
    }

  }
`;

function Home() {
  return (
    <>
      <Header></Header>
      <Content>
        <Categories></Categories>
        <Main>
          <Filters></Filters>
          <OptionButtons>
            <button>전체</button>
            <button>상품</button>
            <button>영상</button>
          </OptionButtons>
          <Results>
            <ul>
              <li>
                <a href="/">
                  <div>
                    <img src={img1} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img2} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img3} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img4} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img1} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img2} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img3} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img4} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div>
                    <img src={img1} alt="item"></img>
                    <div className="item__texts">
                      <div className="item__texts__brand">에프터프레이</div>
                      <div className="item__texts__name">
                        투어리스트 발마칸 코트 네이비
                      </div>
                      <div className="item__texts__price">
                        <span className="price__number">379,000</span>
                        <span className="price__currency">원</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </Results>
        </Main>
      </Content>
    </>
  );
}

export default Home;