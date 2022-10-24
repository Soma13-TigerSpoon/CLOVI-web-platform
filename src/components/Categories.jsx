import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CategoryLink from "./CategoryLink";

const Categories = ({ categories, searchParams, setSearchParams }) => {
  return (
    <Wrapper>
      <SCategories>
        <h2>카테고리</h2>
        <ul>
          {categories.map((category) => {
            const { categoryId, categoryName } = category;
            return (
              <li key={categoryId}>
                <button
                  onClick={() => {
                    // searchParams.append('categoryId', categoryId)
                    setSearchParams({ categoryId });
                  }}
                  className={
                    searchParams.get("categoryId") &&
                    searchParams.get("categoryId") === categoryId.toString()
                      ? "selected"
                      : ""
                  }
                >
                  {categoryName}
                </button>
              </li>
            );
          })}
        </ul>
      </SCategories>
    </Wrapper>
  );
};

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
    .selected {
      font-weight: 700;
      color: ${(props) => props.theme.clovi_black};
    }
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

export default Categories;
