import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route path="category" element={<Home />}>
                <Route path=":categoryId" element={<Home />}></Route>
            </Route>
            <Route path="item" element={<Home />}>
                <Route path=":itemId" element={<Home />}></Route>
            </Route>
            <Route path="video" element={<Home />}>
                <Route path=":videoId" element={<Home />}></Route>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;