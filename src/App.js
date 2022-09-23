// import logo from './logo.svg';
// import "./App.css";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <div className="big-categories">
        <div>전체</div>
        <div>아우터</div>
        <div>상의</div>
        <div>하의</div>
      </div>
      <div className="filters">
        <div className="creators">
          <div className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </div>
          <div className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </div>
          <div className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </div>
        </div>
        <div className="small-categories">
          <div className="small-category">전체</div>
          <div className="small-category">나일론, 코치 재킷</div>
          <div className="small-category">가디건</div>
        </div>
      </div>
      <div className="options"></div>
      <div className="result"></div>
    </>
  );
}

export default App;
