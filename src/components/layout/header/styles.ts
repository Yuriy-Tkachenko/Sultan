import styled from "styled-components";
import { Li } from "../../styled/styled";
import { Ul } from "../../styled/styled";

export const StyledHeader = styled.header`
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    padding: 0 30px;
    margin: 0 auto;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
    margin: 0 auto;
    padding: 0 15px;
  }
`;

export const UserNavigation = styled.div`
  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 100%;
    display: flex;
    order: 2;
    padding: 20px 0;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    opacity: 0.1;
    border-bottom: 1px solid #3F4E65;
    bottom: 0;
    left: 0;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    padding: 0;

    &:after {
      content: none;
    }
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 13px 0;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    opacity: 0.1;
    border-bottom: 1px solid #3F4E65;
    bottom: 0;
    left: 0;
  }

  &:before {
    content: "";
    position: absolute;
    height: 30px;
    border: 1px dashed #3F4E65;
    opacity: 0.1;
    top: 5px;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    padding: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &:before {
      content: none;
    }

    &:after {
      content: none;
    }
  }
`;

export const SiteNavigation = styled.div`
  padding: 0 13px 100px 13px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const ListInfo = styled(Ul)`
  margin: 20px 0 25px 0;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0;
  }
`;

export const ItemInfo = styled(Li)`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    &:not(:last-child) {
      margin-right: 30px;
      margin-bottom: 0;
    }

    &:last-child {
      display: none;
    }
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px dashed #3F4E65;
    opacity: 0.2;
    bottom: -53px;
  }

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin: 0;
    display: flex;

    &:after {
      content: none;
    }
  }
`;

export const Info = styled.b`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const Description = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.greyColor};
`;