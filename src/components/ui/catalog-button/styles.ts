import styled from "styled-components";
import { Link } from "react-router-dom";
import box from "../../../assets/cube.svg";
import whiteBox from "../../../assets/white-box.svg";

export const StyledButton = styled(Link)`
  display: block;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  color: ${(props) => props.theme.greyColor};
  padding: 0 0 0 21px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    background-image: url(${box})
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${((props) => props.theme.whiteColor)};
    background-color: ${((props) => props.theme.yellowBackground)};
    border-radius: 79px;
    padding: 21px 81px 21px 60px;
    margin-bottom: 20px;

    &:before {
      background-image: url(${whiteBox});
      left: 130px;
      top: 22px;
    }
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    margin-bottom: 0;
  }
`;