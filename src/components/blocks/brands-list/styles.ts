import styled from "styled-components";
import { P } from "../../styled/styled";
import { Swiper } from "swiper/react";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 15px;
  margin-bottom: 82px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: ${((props) => props.theme.tabletWidth)};
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
  }
`;

export const StyledText = styled(P)`
  margin: 0 0 25px 0;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin: 0 0 50px 0;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 77px;
  padding: 0 15px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    //width: ${((props) => props.theme.tabletWidth)};
    padding: 0
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    //width: ${((props) => props.theme.desktopWidth)};
  }

  .image-slider,
  .swiper-slide {
    width: auto;
  }
`;