import styled from "styled-components";
import backgroundImage1x from "../../../assets/main-background@1x.jpg";
import backgroundImage2x from "../../../assets/main-background@2x.jpg"

export const MainSection = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage1x});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  padding: 61px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 111px;

  @media(min-resolution: 2dppx) {
    background-image: url(${backgroundImage2x});
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    height: 796px;
    display: block;
    margin-bottom: 100px;
    padding: 0 15px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100vh;
      height: 100%;
      background: linear-gradient(89.86deg, #8A94AB 0.13%, rgba(138, 148, 171, 0) 99.89%);
      backdrop-filter: blur(4.5px);
      z-index: 1;
      left: -15px;
      top: 0;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: ${((props) => props.theme.tabletWidth)};
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
  }
`;

export const TextWrapper = styled.div`
  padding: 17px 22px;
  background: linear-gradient(89.86deg, #8A94AB 0.13%, rgba(138, 148, 171, 0) 99.89%);
  backdrop-filter: blur(4.5px);

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    height: 100%;
    width: ${((props) => props.theme.tabletWidth)};
    margin: 0 auto;
    background: none;
    backdrop-filter: none;
    padding: 98px 0 0 15px;
    position: relative;
    z-index: 2;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 110%;
  color: ${((props) => props.theme.whiteColor)};
  text-align: center;
  margin-bottom: 10px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-weight: 500;
    font-size: 70px;
    line-height: 110%;
    max-width: 570px;
    text-align: left;
    margin-bottom: 40px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  text-transform: uppercase;
  display: block;
  text-align: center;
  color: ${((props) => props.theme.whiteColor)};

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-weight: 800;
    font-size: 30px;
    line-height: 150%;
    max-width: 570px;
    text-align: left;
    margin-bottom: 230px;
  }
`;

export const Offers = styled.div`
  position: absolute;
  bottom: -125px;
  left: 0;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    position: static;
    display: flex;
    width: 477px;
    justify-content: space-between;
  }
`;
