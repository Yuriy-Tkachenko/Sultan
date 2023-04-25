import styled from "styled-components"
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 290px;
  height: 205px;
  margin-bottom: 82px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 100%;
    height: 500px;
    padding: 0 50px;
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