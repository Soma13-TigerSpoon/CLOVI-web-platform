import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Video from "./components/Video";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="category/:categoryId" element={<Categories />}></Route>
          <Route path="item" element={<Home />}>
            <Route path=":itemId" element={<Home />}></Route>
          </Route>
        </Route>
        <Route path="/video/:videoId" element={<Video />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
