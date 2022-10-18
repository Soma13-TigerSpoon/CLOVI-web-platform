import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
`;

const SCategories = styled.div`
  width: 280px;
  padding-right: 80px;
  h2 {
    margin: -6px 0 8px;
    padding-bottom: 12px;
    border-bottom: 4px solid #000;
    font-size: 23px;
    color: #000;
    font-weight: 800;
    line-height: 1.25;
  }
  li {
    padding: 3px 0px;
    width: 100%;
    font-size: 16px;
    line-height: 28px;
    color: #5d5d5d;
    text-align: left;
    outline: none;
    font-weight: 200;
    button {
      display: flex;
      width: 100%;
      &:hover {
        font-weight: 700;
        color: ${(props) => props.theme.clovi_black};
      }
    }
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const getData = () => {
  //     fetch("https://test.clovi.app/api/v1/categories")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log('data:', data);
  //         setCategories((categories) => data.data);
  //       })
  //   }
  //   getData();
  // }, []);

  useEffect(() => {
    (async () => {
      const response = await (await fetch(
        "https://test.clovi.app/api/v1/categories"
      )).json();
      console.log("response:", response);
      setCategories((categories) => response.data);
    })();
  }, []);

  const dummyData = [
    {
      categoryId: 6,
      categoryName: "모자",
      order: 0,
      childCategories: [
        {
          categoryId: 601,
          categoryName: "캡/야구 모자",
          order: 0,
          childCategories: [],
        },
        {
          categoryId: 602,
          categoryName: "버킷/사파리햇",
          order: 0,
          childCategories: [],
        },
        {
          categoryId: 603,
          categoryName: "비니",
          order: 0,
          childCategories: [],
        },
        {
          categoryId: 604,
          categoryName: "기타 모자",
          order: 0,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 7,
      categoryName: "안경",
      order: 1,
      childCategories: [
        {
          categoryId: 701,
          categoryName: "안경",
          order: 1,
          childCategories: [],
        },
        {
          categoryId: 702,
          categoryName: "선글라스",
          order: 1,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 1,
      categoryName: "아우터",
      order: 2,
      childCategories: [
        {
          categoryId: 101,
          categoryName: "후드집업",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 102,
          categoryName: "블루종/MA-1",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 103,
          categoryName: "아노락 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 104,
          categoryName: "트레이닝 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 105,
          categoryName: "레더/라이더스 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 106,
          categoryName: "데님/트러커 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 107,
          categoryName: "카디건",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 108,
          categoryName: "베스트",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 109,
          categoryName: "코트",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 110,
          categoryName: "롱패딩/롱헤비 아우터",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 111,
          categoryName: "숏패딩/숏헤비 아우터",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 112,
          categoryName: "플리스",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 113,
          categoryName: "슈트/블레이저 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 114,
          categoryName: "싱글코트",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 115,
          categoryName: "더블코트",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 116,
          categoryName: "기타코트",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 117,
          categoryName: "나일론/코치 재킷",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 118,
          categoryName: "야상",
          order: 2,
          childCategories: [],
        },
        {
          categoryId: 119,
          categoryName: "기타 아우터",
          order: 2,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "수트/셋업",
      order: 3,
      childCategories: [],
    },
    {
      categoryId: 2,
      categoryName: "상의",
      order: 4,
      childCategories: [
        {
          categoryId: 201,
          categoryName: "맨투맨/스웨트셔츠",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 202,
          categoryName: "후드티",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 203,
          categoryName: "니트/스웨터",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 204,
          categoryName: "셔츠/남방",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 205,
          categoryName: "피케/카라티셔츠",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 206,
          categoryName: "긴팔 티셔츠",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 207,
          categoryName: "반팔 티셔츠",
          order: 4,
          childCategories: [],
        },
        {
          categoryId: 208,
          categoryName: "기타",
          order: 4,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 4,
      categoryName: "하의",
      order: 5,
      childCategories: [
        {
          categoryId: 401,
          categoryName: "숏 팬츠",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 402,
          categoryName: "슬랙스",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 403,
          categoryName: "코튼 팬츠",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 404,
          categoryName: "데님 팬츠",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 405,
          categoryName: "트레이닝/조거 팬츠",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 406,
          categoryName: "카고팬츠",
          order: 5,
          childCategories: [],
        },
        {
          categoryId: 407,
          categoryName: "기타",
          order: 5,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 5,
      categoryName: "신발",
      order: 6,
      childCategories: [
        {
          categoryId: 501,
          categoryName: "구두",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 502,
          categoryName: "슬리퍼",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 503,
          categoryName: "부츠",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 504,
          categoryName: "로퍼",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 505,
          categoryName: "샌들",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 506,
          categoryName: "신발 용품",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 507,
          categoryName: "캔버스/단화",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 508,
          categoryName: "스니커즈",
          order: 6,
          childCategories: [],
        },
        {
          categoryId: 509,
          categoryName: "기타 신발",
          order: 6,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 9,
      categoryName: "잡화",
      order: 7,
      childCategories: [
        {
          categoryId: 901,
          categoryName: "벨트",
          order: 9,
          childCategories: [],
        },
        {
          categoryId: 902,
          categoryName: "장갑",
          order: 9,
          childCategories: [],
        },
        {
          categoryId: 903,
          categoryName: "넥타이",
          order: 9,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 8,
      categoryName: "액세서리",
      order: 8,
      childCategories: [
        {
          categoryId: 801,
          categoryName: "팔찌",
          order: 8,
          childCategories: [],
        },
        {
          categoryId: 802,
          categoryName: "귀걸이",
          order: 8,
          childCategories: [],
        },
        {
          categoryId: 803,
          categoryName: "반지",
          order: 8,
          childCategories: [],
        },
        {
          categoryId: 804,
          categoryName: "목걸이/펜던트",
          order: 8,
          childCategories: [],
        },
        {
          categoryId: 805,
          categoryName: "기타 액세서리",
          order: 8,
          childCategories: [],
        },
      ],
    },
    {
      categoryId: 10,
      categoryName: "시계",
      order: 9,
      childCategories: [],
    },
    {
      categoryId: 11,
      categoryName: "가방",
      order: 10,
      childCategories: [
        {
          categoryId: 1101,
          categoryName: "백팩",
          order: 10,
          childCategories: [],
        },
        {
          categoryId: 1102,
          categoryName: "힙색",
          order: 10,
          childCategories: [],
        },
        {
          categoryId: 1103,
          categoryName: "크로스 백",
          order: 10,
          childCategories: [],
        },
        {
          categoryId: 1104,
          categoryName: "기타 가방",
          order: 10,
          childCategories: [],
        },
      ],
    },
  ];

  return (
    <Wrapper>
      <SCategories>
        <h2>카테고리</h2>
        <ul>
          {dummyData.map((category) => {
            const { categoryId, categoryName } = category;
            return (
              <li key={categoryId}>
                <button>{categoryName}</button>
              </li>
            );
          })}
        </ul>
      </SCategories>
    </Wrapper>
  );
};

export default Categories;