import styled from "styled-components";
import logo from "../../../assets/header-logo.svg";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

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