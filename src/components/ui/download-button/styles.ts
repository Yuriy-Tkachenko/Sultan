import styled from "styled-components";
import { Button } from "../../styled/styled";
import download from "../../../assets/download.svg";

export const ButtonWrapper = styled(Button)`
  background-color: ${(props) => props.theme.yellowBackground};
  border-radius: 79px;
  position: absolute;
  top: 295px;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    position: static;
    display: block;
  }
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.whiteColor};
  padding-right: 29px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 11.33px;
    height: 12.75px;
    background-image: url(${download});
    right: 0;
    top: 1px;
  }
`;