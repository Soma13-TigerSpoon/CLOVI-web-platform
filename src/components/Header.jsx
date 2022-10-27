import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Header = () => {
  const [searchKeyWord, setSearchKeyWord] = useState();
  const navigate = useNavigate();
  const handleChange = ({ target: { value } }) => setSearchKeyWord(value);
  const handleSubmit = (e) => {
    navigate({
      pathname: "/list/items",
      search: `?q=${searchKeyWord}`,
    });
    e.preventDefault();
  };
  return (
    <Container>
      <a className="logo" href="/">
        <img
          className="logo__img"
          alt="logo"
          src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
        ></img>
      </a>
      <form className="sform" onSubmit={handleSubmit}>
        <input
          className="sform__input"
          type="text"
          onChange={handleChange}
        ></input>
        <button className="sform__button" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" />
          </svg>
        </button>
      </form>
      <Button buttonAction="클로비 설치하기"></Button>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 6%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.clovi_white};
  border-bottom: 1px solid ${(props) => props.theme.border_grey};
  .sform {
    flex-grow: 1;
    display: flex;
    padding: 0 150px;
    .sform__input {
      border: 1px solid ${(props) => props.theme.border_grey};
      border-right: 0px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      text-indent: 10px;
      font-size: 16px;
    }
    .sform__button {
      background-color: ${(props) => props.theme.youtube_button_grey};
      border: 1px solid ${(props) => props.theme.border_grey};
      width: 64px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 24px;
      }
      &:hover {
        border-color: #c6c6c6;
        background-color: #f0f0f0;
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
      }
    }
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
    padding: 13px 6%;
  }
  .logo__img {
    height: 36px;
    vertical-align: bottom;
    /* Small Devices, Tablets : ~ 768px */
    @media only screen and (max-width: 768px) {
    }
    /* Extra Small Devices, Phones : ~ 480px */
    @media only screen and (max-width: 480px) {
      height: 24px;
    }
  }
`;

export default Header;
