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
  return (
    <Wrapper>
      <SCategories>
        <h2>카테고리</h2>
        <ul>
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>아우터</button>
          </li>
          <li>
            <button>상의</button>
          </li>
          <li>
            <button>하의</button>
          </li>
        </ul>
      </SCategories>
    </Wrapper>
  );
};

export default Categories;
