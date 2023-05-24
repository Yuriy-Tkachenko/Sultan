import styled from "styled-components";
import { Button } from "../../styled/styled";
import trash from "../../../assets/trash.svg";

export const StyledButton = styled(Button)`
  width: 59px;
  height: 59px;
  border-radius: 100%;
  background-color: ${((props) => props.theme.yellowBackground)};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 17px;
    height: 18px;
    left: 20px;
    top: 20px;
    background-image: url(${trash});
  }
`;