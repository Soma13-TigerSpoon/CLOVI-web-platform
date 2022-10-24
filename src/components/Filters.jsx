import styled from "styled-components";

const Filters = ({ searchParams, setSearchParams, childCategories }) => {
  return (
    <SFilter>
      <Creators>
        <ul>
          {dummyData.map((channel) => {
            const { name, id, profileUrl, url } = channel;
            return (
              <li className="creator" key={id}>
                <div className="img-border">
                  <img
                    src={profileUrl}
                    className="creator-profile"
                    alt="creator profile"
                  ></img>
                </div>
                <div className="creator-name">{name}</div>
              </li>
            );
          })}
        </ul>
      </Creators>
      <SmallCategories>
        <ul>
          {childCategories.map((childCategory) => {
            const { categoryId, categoryName } = childCategory;
            return (
              <li key={categoryId} className="small-category">
                <span
                  onClick={() => {
                    searchParams.set("childCategoryId", categoryId);
                    setSearchParams(searchParams);
                  }}
                  className={
                    searchParams.get("childCategoryId") &&
                    searchParams.get("childCategoryId") === categoryId.toString()
                      ? "selected"
                      : ""
                  }
                >
                  {categoryName}
                </span>
              </li>
            );
          })}
        </ul>
      </SmallCategories>
    </SFilter>
  );
};

const SFilter = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const Creators = styled.div`
  display: flex;
  padding: 14px 10px 4px 10px;
  border: 1px solid ${(props) => props.theme.border_grey};
  li {
    float: left;
    display: flex;
    align-items: center;
    padding: 0px 20px 10px 10px;
    .img-border {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        border-radius: 50%;
      }
    }
    .creator-name {
      font-size: 12px;
      padding-left: 8px;
      color: ${(props) => props.theme.text_grey};
    }
  }
  .selected {
    .creator-name {
      /* text-decoration: underline; */
      color: ${(props) => props.theme.clovi_black};
      font-weight: 600;
    }
    .img-border {
      border: 1.8px solid ${(props) => props.theme.clovi_red};
    }
  }
`;

const SmallCategories = styled.div`
  border: 1px solid ${(props) => props.theme.border_grey};
  margin-top: -1px;
  li {
    float: left;
    span {
      display: inline-block;
      padding: 2px 20px 0;
      line-height: 42px;
      color: ${(props) => props.theme.text_grey};
      font-size: 14px;
      font-weight: 200;
      &:hover {
        cursor: pointer;
        font-weight: 700;
        color: ${(props) => props.theme.clovi_black};
      }
    }
    .selected {
      font-weight: 700;
      color: ${(props) => props.theme.clovi_black};
    }
  }
`;

const dummyData = [
  {
    name: "핏더사이즈",
    id: 1,
    profileUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu-opBs4fsY6Vw06U1VMoTpcaepRcYtkmmPSuOl1=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/%ED%95%8F%EB%8D%94%EC%82%AC%EC%9D%B4%EC%A6%88/about",
  },
  {
    name: "킹타쿠Kingtaku",
    id: 3,
    profileUrl:
      "https://yt3.ggpht.com/LFde7BcLM9FPCP8EyPwgEEFZBbeK7JrhvhVtgieYv1C5RNrzLGdBNtxI3Ti_M061AkyRryFyEA=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCN-hIUuioKIUh_K-ip7rchA",
  },
  {
    name: "깡스타일리스트",
    id: 4,
    profileUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu8i1Pn_A2g9ru1wf1RaOE-jduiCJL2lX3WAabrb=s88-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UC8a6z7i9qypp9PqJ_0HhBrw",
  },
  {
    name: "오정규",
    id: 5,
    profileUrl: null,
    url: "https://www.youtube.com/channel/UCjD3iAk_WIUkiUk1tHYP9Cw",
  },
];

export default Filters;
