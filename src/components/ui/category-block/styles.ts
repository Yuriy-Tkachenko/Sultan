import styled from "styled-components";
import { Li } from "../../styled/styled";

export const CardWrapper = styled(Li)`
  width: 140px;
  height: 100%;
  text-align: center;

  

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 250px;
    height: 291px;
  }
`;

export const CardBlock = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  background-color: ${((props) => props.theme.beigeColor)};
  box-shadow: 0px 14px 39px -3px rgba(0, 0, 0, 0.06);
  position: relative;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 90%;
  height: 80%;
  left: 0;
  bottom: 0;
  border-radius: 20px;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  max-width: 60px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 16px;
  }
`;