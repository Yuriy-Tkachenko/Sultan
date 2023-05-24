import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";
import { Li } from "../../styled/styled";
import { Ul } from "../../styled/styled";

export const MapSection = styled.section``;

export const StyledContainer = styled(MapContainer)`
  width: 290px;
  height: 600px;
  margin: 0 auto 50px auto;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: ${((props) => props.theme.tabletWidth)};
    margin-bottom: 82px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: 1366px;
    margin-bottom: 100px;
  }
`;

export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    width: 270px;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    border-radius: 8px;

    @media(min-width: ${((props) => props.theme.tabletWidth)}) {
      width: 500px;
      padding: 50px;
    }

    @media(min-width: ${((props) => props.theme.desktopWidth)}) {
      width: 735px;
      padding: 60px 50px;
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-popup-content {
    margin: 0;
  }
`;

export const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: ${((props) => props.theme.greyColor)};
  margin: 0 0 5px 0;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 40px;
    margin: 0 0 10px 0;
  }
`;

export const Styledtext = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 130.02%;
  color: ${((props) => props.theme.greyColor)};
  display: inline-block;
  margin-bottom: 15px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 20px;
    margin-bottom: 25px;
  }
`;

export const StyledList = styled(Ul) `
  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: 635px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledLi = styled(Li)`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      opacity: 0.2;
      border: 1px dashed #3F4E65;
      bottom: -10px;

      @media(min-width: ${((props) => props.theme.tabletWidth)}) {
        bottom: -25px;
      }
    }

    @media(min-width: ${((props) => props.theme.tabletWidth)}) {
      margin-bottom: 50px;
    }
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    &:not(:last-child) {
      margin-bottom: 0;

      &:after {
        content: none;
      }
    }
  }
`;

export const StyledCaption = styled.b`
  font-weight: 700;
  font-size: 14px;
  line-height: 130.02%;
  color: ${((props) => props.theme.blackColor)};
  display: block;
  margin-bottom: 5px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 10px;
  }
`;

export const StyledDescription = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 130.02%;
  display: block;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 14px;
    max-width: 237px;
  }
`;
