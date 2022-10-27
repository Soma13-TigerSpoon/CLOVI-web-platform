import { useState } from "react";
import { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import ItemsList from "./ItemsList";
import VideosList from "./VideosList";

function Results({ searchParams }) {
  const [items, setItems] = useState([]);
  const [videos, setVideos] = useState([]);
  const itemsMatch = useMatch("list/items");
  const videosMatch = useMatch("list/videos");

  const apiUrlDict = {
    channel: "channel",
    categoryId: "parent_category",
    childCategoryId: "child_category",
    page: "page",
    q: "keyword"
  };

  useEffect(() => {
    console.log('searchParams.get(q):', searchParams.get('q'));
    const queryStringObj = {};
    for (const [key, value] of searchParams.entries()) {
      queryStringObj[apiUrlDict[key]] = value;
    }
    queryStringObj["size"] = 3 * 16;
    const qs = queryString.stringify(queryStringObj);
    // console.log(qs);
    let fetchUrl = 'https://test.clovi.app/api/v1/search?';
    console.log(`requesting url: ${fetchUrl}` + qs);
    (async () => {
      const response = await (
        await fetch(fetchUrl + qs)
      ).json();
      console.log("response:", response);
      // https://test.clovi.app/api/v1/search?channel={A}&parent_category={B}&child_category={C}&page={D}&size={E}&sort={F}
      setItems(response.data.items.content);
      console.log(items);
      setVideos(response.data.videos.content);
      console.log(videos);
    })();
  }, [searchParams]);

  return (
    <>
      <OptionButtons>
        <Link to={`items?${searchParams.toString()}`}>
          <OptionButton isActive={itemsMatch !== null}>상품</OptionButton>
        </Link>
        <Link to={`videos?${searchParams.toString()}`}>
          <OptionButton isActive={videosMatch !== null}>영상</OptionButton>
        </Link>
      </OptionButtons>

      <Routes>
        <Route path="items" element={<ItemsList items={items} />} />
        <Route path="videos" element={<VideosList videos={videos} />} />
      </Routes>
    </>
  );
}

const OptionButtons = styled.div`
  padding: 24px 0px 18px 0px;
`;

const OptionButton = styled.button`
    margin-right: 18px;
    width: 80px;
    height: 30px;
    font-size: 12px;
    font-weight: 300;
    border: 1px solid ${(props) => props.theme.clovi_black};
    color: ${props => props.isActive ? props.theme.clovi_white : props.theme.clovi_black };
    background-color: ${props => props.isActive ? props.theme.clovi_black : props.theme.clovi_white };
    font-weight: ${props => props.isActive ? 600 : '' };
    &:hover {
      color: ${(props) => props.theme.clovi_white};
      background-color: ${(props) => props.theme.clovi_black};
      font-weight: 600;
    }
`;

export default Results;
