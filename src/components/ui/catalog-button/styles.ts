import styled from "styled-components";
import { Button } from "../../styled/styled";
import box from "../../../assets/cube.svg";
import whiteBox from "../../../assets/white-box.svg";

export const StyledButton = styled(Button)`
  position: relative;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
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
    width: 192px;
    height: 59px;
    padding: 0 27px 0 0;
    margin-bottom: 20px;

    &:before {
      background-image: url(${whiteBox});
      left: 123px;
      top: 22px;
    }
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    margin-bottom: 0;
  }
`;