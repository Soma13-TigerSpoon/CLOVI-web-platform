import { useState } from "react";
import { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import ItemsList from "./ItemsList";
import VideosList from "./VideosList";

function Results({ searchParams }) {
  const [items, setItems] = useState([]);
  const [videos, setVideos] = useState([]);

  const apiUrlDict = {
    channel: "channel",
    categoryId: "parent_category",
    childCategoryId: "child_category",
    page: "page",
  };

  useEffect(() => {
    const queryStringObj = {};
    for (const [key, value] of searchParams.entries()) {
      queryStringObj[apiUrlDict[key]] = value;
    }
    queryStringObj["size"] = 3 * 16;
    const qs = queryString.stringify(queryStringObj);
    // console.log(qs);
    console.log("requesting url: https://test.clovi.app/api/v1/search?" + qs);
    (async () => {
      const response = await (
        await fetch("https://test.clovi.app/api/v1/search?" + qs)
      ).json();
      console.log("response:", response);
      // https://test.clovi.app/api/v1/search?channel={A}&parent_category={B}&child_category={C}&page={D}&size={E}&sort={F}
      setItems(response.data.items.content);
      console.log(items);
      setVideos(response.data.videos.content);
    })();
  }, [searchParams]);

  return (
    <>
      <OptionButtons>
          <Link to={`items?${searchParams.toString()}`}><button>상품</button></Link>
          <Link to={`videos?${searchParams.toString()}`}><button>영상</button></Link>
      </OptionButtons>
      
      <Routes>
        <Route path="items" element={<ItemsList items={items} />} />
        <Route path="videos" element={<VideosList />} />
      </Routes>
    </>
  );
}

const List = styled.div`
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
            font-size: 13px;
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

export default Results;
