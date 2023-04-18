import styled from "styled-components"
import basket from "../../../assets/basket-white.svg";

export const StyledButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.15em;
  font-family: 'inter';
  text-transform: uppercase;
  color: ${((props) => props.theme.whiteColor)};
  padding: 16.5px 57px 16.5px 25px;
  border: none;
  background-color: ${((props) => props.theme.yellowBackground)};
  border-radius: 80px;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 23.7px;
    height: 16.8px;
    background-image: url(${basket});
    top: 13.8px;
    right: 27.4px; 
  }
`;