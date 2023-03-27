import styled from "styled-components";

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.yellowBackground};
  border-radius: 50%;
  border: none;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 11px;
    height: 2px;
    top: 14.5px;
    left: 10.3px;
    background-color: ${(props) => props.theme.whiteColor};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;