import styled from "styled-components"
import { Button } from "../../styled/styled";
import phone from "../../../assets/white-phone.svg";
import operator1x from "../../../assets/operator@1x.png";
import operator2x from "../../../assets/operator@2x.png";

export const ButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.yellowBackground};
  border-radius: 50%;
  border: none;
  position: relative;
  margin-right: 7px;

  &:before {
    content: "";
    position: absolute;
    width: 8.13px;
    height: 8.13px;
    background-image: url(${phone});
    top: 10px;
    left: 10px;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: none;
  }
`;

export const ButtonName = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${(props) => props.theme.greyColor};
  text-decoration-line: underline;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  position: absolute;
  top: 240px;
  left: 10px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 84px;
    
    &:before {
      content: '';
      position: absolute;
      width: 70px;
      height: 92px;
      background-image: url(${operator1x});
      background-size: cover;
      right: 0;

      @media(min-resolution: 2dppx) {
        background-image: url(${operator2x});
      }
    }
  }
`;

export const Number = styled.span`
  display: none;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  display: none;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: inline-block;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: ${((props) => props.theme.greyColor)};
    margin: 0 0 5px 0;
  }
`;