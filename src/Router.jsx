import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Item from "./components/Item";
import Video from "./components/Video";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list/items" />}></Route>
        <Route path="/list" element={<Navigate to="/list/items" />}></Route>
        <Route path="/list/*" element={<Home />}></Route>
        <Route path="/item/:itemId" element={<Item />}></Route>
        <Route path="/video/:videoId" element={<Video />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;