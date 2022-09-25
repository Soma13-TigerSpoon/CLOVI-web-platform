// import logo from './logo.svg';
// import "./App.css";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
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
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3%;
    }
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Content>
        <Categories></Categories>
        <Main>
          <Filters></Filters>
          <div className="options"></div>
          <Results>
            <ul>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
            </ul>
          </Results>
        </Main>
      </Content>
    </>
  );
}

export default App;
