import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${((props) => props.theme.whiteColor)};
  background: linear-gradient(0deg, #B7BFCA 0%, #BDC7D0 65.9%, #BDC7D1 100%);
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  height: 205px;
  border-radius: 10px;
  padding: 20px 40px;
  margin-bottom: 80px;
  position: relative;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 14px;
    line-height: 150%;
    height: 500px;
    margin: 0 auto;
    padding: 45px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    padding: 80px;
    margin-bottom: 100px;
  }
`;

export const ConditionText = styled.p`
  font-weight: 500;
  font-size: 6px;
  line-height: 185%;
  text-transform: uppercase;
  margin: 0 0 5px 0;
  position: relative;
  z-index: 1;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 10px;
    line-height: 150%;
    margin: 0 0 10px 0;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    font-size: 14px;
  }
`;

export const Name = styled.h3`
  font-weight: 800;
  font-size: 20px;
  line-height: 110%;
  margin: 0 0 10px 0;
  position: relative;
  z-index: 1;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 60px;
    margin: 0 0 35px 0;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    font-size: 70px;
    max-width: 600px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  position: relative;
  z-index: 1;
  max-width: 146px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 20px;
    max-width: 230px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    max-width: 498px;
  }
`;

export const StyledImage = styled.img`
  width: 280px;
  height: 205px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 600px;
    height: 500px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: 990px;
    height: 500px;
  }
`;