import img1 from "./assets/29cm1.jpeg";
import img2 from "./assets/29cm2.jpeg";
import img3 from "./assets/29cm3.jpeg";
import img4 from "./assets/29cm4.jpeg";
// import "./App.css";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
