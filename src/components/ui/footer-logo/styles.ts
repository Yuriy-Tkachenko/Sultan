import styled from "styled-components";
import logo from "../../../assets/footer-logo.svg";

export const Logo = styled.img`
  src: ${logo};
  width: 97px;
  height: 41px;
  margin-bottom: 15px;
  
  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 156px;
    height: 66px;
  }
`;

Logo.defaultProps = {
  src: logo
};