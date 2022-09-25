import styled from "styled-components";

const SButton = styled.button`
  font-size: 24px;
  border-radius: 10px;
  color: ${(props) => props.theme.clovi_white};
  background-color: ${(props) => props.theme.clovi_black};
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  width: fit-content;
  &:hover {
    background-color: ${(props) => props.theme.clovi_red};
  }
  /* Small Devices, Tablets : ~ 768px */
  @media only screen and (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
  /* Extra Small Devices, Phones : ~ 480px */
  @media only screen and (max-width: 480px) {
  }
`;

const Button = (props) => (
    <SButton>{props.buttonAction}</SButton>
);

export default Button;