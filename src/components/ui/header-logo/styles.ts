import styled from "styled-components";
import logo from "../../../assets/header-logo.svg";

export const Logo = styled.img`
  src: ${logo};
  
  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 156px;
    height: 66px;
    margin-right: 38px;
  }
`;

Logo.defaultProps = {
  src: logo
};