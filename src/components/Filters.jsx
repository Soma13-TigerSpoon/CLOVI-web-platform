import styled from "styled-components";

const Filters = ({
  searchParams,
  setSearchParams,
  childCategories,
  creators,
}) => {
  console.log(searchParams.get("channel"));
  return (
    <SFilter>
      <Creators>
        <ul>
          {creators.map((channel) => {
            const { name, id, profileUrl, url } = channel;
            return (
              <CreatorsLi
                className="creator"
                key={id}
                onClick={() => {
                  searchParams.set("channel", name);
                  setSearchParams(searchParams);
                }}
                selected={searchParams.get("channel") === name}
              >
                <div className="img-border">
                  <img
                    src={profileUrl}
                    className="creator-profile"
                    alt="creator profile"
                  ></img>
                </div>
                <div className="creator-name">{name}</div>
              </CreatorsLi>
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
                    searchParams.get("childCategoryId") ===
                      categoryId.toString()
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
  }
`;
const CreatorsLi = styled.li`
  float: left;
  display: flex;
  align-items: center;
  padding: 0px 20px 10px 10px;
  &:hover {
    cursor: pointer;
  }
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
    ${(props) =>
      props.selected &&
      `
        border: 1.8px solid ${props.theme.clovi_red};
    `}
  }
  .creator-name {
    font-size: 12px;
    padding-left: 8px;
    color: ${(props) =>
      props.selected ? props.theme.clovi_black : props.theme.text_grey};
    font-weight: ${(props) => (props.selected ? 600 : "")};
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

export default Filters;
