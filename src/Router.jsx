import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Channel from "./components/Channel";
import ChannelList from "./components/ChannelList";
import Home from "./components/Home";
import Item from "./components/Item";
import ScrollToTop from "./components/ScrollTop";
import Video from "./components/Video";

function Router() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/list/items" />}></Route>
        <Route path="/list" element={<Navigate to="/list/items" />}></Route>
        <Route path="/list/*" element={<Home />}></Route> */}
        <Route path="/" element={<ChannelList />}></Route>
        <Route path="/channel/:channelId" element={<Channel />}></Route>
        <Route path="/item/:itemId" element={<Item />}></Route>
        <Route path="/video/:videoId" element={<Video />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;