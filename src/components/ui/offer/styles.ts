import styled from "styled-components";
import plus from "../../../assets/plus.svg";

export const Wrapper = styled.div`
  
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${((props) => props.theme.greyColor)};
  padding-left: 23px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background-size: cover;
    background-image: url(${plus});
    left: 0;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 14px;
    color: ${((props) => props.theme.whiteColor)};
    max-width: 227px;
    padding-left: 49px;

    &:before {
      width: 39px;
      height: 39px;
    }
  }
`;