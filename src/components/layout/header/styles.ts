import styled from "styled-components";
import { Button } from "../../styled/styled";
import { Li } from "../../styled/styled";
import { Ul } from "../../styled/styled";
import phone from "../../../assets/white-phone.svg";

export const StyledHeader = styled.header`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 10px 15px;
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
`;

export const UserNavigation = styled.nav`
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
`;

export const NavButton = styled(Button)`
  display: flex;
  position: relative;
`;

export const NavDescription = styled.span`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

export const SiteNavigation = styled.div`
  padding: 0 13px;
`;

export const ListInfo = styled(Ul)`
  margin: 20px 0 25px 0;
`;

export const ItemInfo = styled(Li)`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px dashed #3F4E65;
    opacity: 0.2;
    bottom: -25px;
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

export const CallBackButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const ButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.yellowBackground};
  border-radius: 50%;
  border: none;
  position: relative;
  margin-right: 7px;

  &:before {
    content: "";
    position: absolute;
    width: 8.13px;
    height: 8.13px;
    background-image: url(${phone});
    top: 10px;
    left: 10px;
  }
`;

export const ButtonName = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${(props) => props.theme.greyColor};
  text-decoration-line: underline;
`;

export const MenuTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  margin: 0 0 25px 0;
`;

export const MenuItem = styled(Li)`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.greyColor};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;