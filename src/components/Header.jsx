import styled from "styled-components";
import Button from "./Button";

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 6%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.clovi_white};
  border-bottom: 1px solid ${(props) => props.theme.border_grey};
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

const Header = () => {
  return (
    <SHeader>
      <a className="logo" href="/">
        <img
          className="logo__img"
          alt="logo"
          src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
        ></img>
      </a>
      <form className="sform" action="">
        <input className="sform__input" name="q" type="text"></input>
      </form>
      <Button buttonAction="클로비 설치하기"></Button>
    </SHeader>
  );
};

export default Header;