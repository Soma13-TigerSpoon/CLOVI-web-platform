import Header from "./Header";
import Results from "./Results";
import Categories from "./Categories";
import Filters from "./Filters";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams();
  useEffect(() => {
    // console.log('home effect executed');
    (async () => {
      const response = await (
        await fetch("https://test.clovi.app/api/v1/categories")
      ).json();
      // console.log("response:", response);
      setCategories((categories) => response.data);
    })();
  }, []);

  useEffect(() => {
    console.log("search params changed!");
    for (const category of categories) {
      if (category.categoryId.toString() === searchParams.get("categoryId")) {
        setChildCategories([...category.childCategories]);
        break;
      }
    }
  }, [categories, searchParams]);

  return (
    <>
      <Header></Header>
      <Content>
        <Categories
          categories={categories}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        ></Categories>
        <Main>
          <Filters
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            childCategories={childCategories}
          ></Filters>
          <Results searchParams={searchParams}></Results>
        </Main>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  padding: 150px 50px 0px 50px;
  display: flex;
  height: 150%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;



export default Home;
