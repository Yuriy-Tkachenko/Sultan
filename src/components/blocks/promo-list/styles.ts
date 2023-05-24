import styled from "styled-components"
import { Swiper } from "swiper/react";

export const SliderSection = styled.section``;

export const StyledSwiper = styled(Swiper)`
  width: 290px;
  height: 205px;
  margin-bottom: 82px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: ${((props) => props.theme.tabletWidth)};
    height: 500px;
    margin-bottom: 100px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: 1366px;
    height: 500px;
    padding: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
`;