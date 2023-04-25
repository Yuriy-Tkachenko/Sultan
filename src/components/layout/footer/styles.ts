import styled from "styled-components";
import { Button, Li } from "../../styled/styled";

export const StyledFooter = styled.footer`
  height: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.whiteColor};
  position: relative;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 71px 15px 116px 15px;
  }
`;

export const Container = styled.div`
  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    width: ${(props) => props.theme.tabletWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  @media(min-width: ${(props) => props.theme.desktopWidth}) {
    width: ${(props) => props.theme.desktopWidth};
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin: 0 0 14px 0;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 16px;
    max-width: 320px;
    margin-bottom: 45px;
  }
`;

export const MenuTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  margin: 0 0 20px 0;
`;

export const MenuItem = styled(Li)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const TypeOfCall = styled.b`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 5px;
  display: block;
`;

export const Info = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 5px;
  display: block;
`;

export const CallButton = styled(Button)`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${(props) => props.theme.whiteColor};
  text-decoration: underline;
  padding: 0;
  display: block;
`;

export const Caption = styled.h2`
  display: none;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    display: inline-block;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    margin: 0 0 25px 0;
  }
`;