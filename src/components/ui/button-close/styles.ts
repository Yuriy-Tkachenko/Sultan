import styled from "styled-components";
import buttonClose from "../../../assets/button-close.svg";

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${buttonClose});
  border-radius: 50%;
  border: none;
  position: absolute;
  left: 15px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: none;
  }
`;