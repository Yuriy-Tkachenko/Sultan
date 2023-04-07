import styled from "styled-components";
import { Input, Button } from "../../styled/styled";
import search from "../../../assets/search-logo.svg";
import whiteSearch from "../../../assets/white-search.svg";

export const StyledInput = styled(Input)`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.greyColor};
  text-align: right;
  box-sizing: border-box;
  width: 59px;
  height: 15px;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${(props) => props.theme.lightGreyColor};
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
    background-color: ${(props) => props.theme.extraLightGreyColor};
    border-radius: 36px;
  }
`;

export const StyledForm = styled.form`
  width: 59px;
  height: 15px;
  display: flex;
  position: relative;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    width: 263px;
    height: 59px;
    margin-bottom: 20px;

    &:before {
      content: '';
      position: absolute;
      width: 39px;
      height: 39px;
      border-radius: 100px;
      background-color: ${(props) => props.theme.yellowBackground};
      right: 10px;
      top: 10px;
    }
  }

  @media(min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  width: 14px;
  height: 14px;
  position: absolute;
  background-image: url(${search});
  left: 0;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    background-image: url(${whiteSearch});
    background-repeat: no-repeat;
    width: 14.5px;
    height: 14.5px;
    left: 226px;
    top: 21px;
  }
`;