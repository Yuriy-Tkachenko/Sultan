import styled from "styled-components";
import basket from "../../../assets/basket.svg";

export const StyledButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: -35px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    position: relative;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 22px;
  height: 16px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: 40.5px;
    height: 28.8px;
    margin-right: 20px;
  }
`;

Logo.defaultProps = {
  src: basket,
};

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Name = styled.span`
  display: none;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: inline-block;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const Price = styled.b`
  display: none;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
  }
`;

export const Counter = styled.b`
  display: none;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: ${((props) => props.theme.whiteColor)};
    width: 22px;
    height: 22px;
    border-radius: 100px;
    background-color: ${((props) => props.theme.yellowBackground)};
    position: absolute;
    top: 0;
    left: 33px;
  }
`;