import styled from "styled-components";
import { Button } from "../../styled/styled";

export const StyledButton = styled(Button)`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 21px 51px;
  color: ${((props) => props.theme.whiteColor)};
  background-color: ${((props) => props.theme.yellowBackground)};
  border-radius: 79px;
`;