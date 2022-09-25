import styled from "styled-components";

const SFilter = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const Creators = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.border_grey};
  li {
    float: left;
  }
`;

const SmallCategories = styled.div`
  border: 1px solid ${(props) => props.theme.border_grey};
  margin-top: -1px;
  li {
    float: left;
    a {
      display: inline-block;
      padding: 2px 20px 0;
      line-height: 42px;
      color: #5d5d5d;
      font-size: 14px;
      font-weight: 200;
    }
  }
`;

const Filters = () => {
  return (
    <SFilter>
      <Creators>
        <ul>
          <li className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </li>
          <li className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </li>
          <li className="creator">
            <img className="creator-profile" alt="creator profile"></img>
            <span className="creator-name">유튜버</span>
          </li>
        </ul>
      </Creators>
      <SmallCategories>
        <ul>
          <li className="small-category">
            <a href="/">전체</a>
          </li>
          <li className="small-category">
            <a href="/">나일론, 코치 재킷</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
          <li className="small-category">
            <a href="/">가디건</a>
          </li>
        </ul>
      </SmallCategories>
    </SFilter>
  );
};

export default Filters;
