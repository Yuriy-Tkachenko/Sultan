import styled from "styled-components";
import { Button } from "../../styled/styled";

export const ParametersTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 290px;
`;

export const ParametersTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
`;

export const ParametersButton = styled(Button)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${((props) => props.theme.extraLightYellowColor)};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 8px;
    transform: rotate(45deg);
    background-color: ${((props) => props.theme.greyColor)};
    top: 12px;
    left: 13px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 8px;
    transform: rotate(135deg);
    background-color: ${((props) => props.theme.greyColor)};
    top: 12px;
    left: 18px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;