import styled from "styled-components";
import { Ul, Button } from "../../styled/styled";

export const MakersList = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

export const ButtonShow = styled(Button)`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  font-family: Inter, Arial, sans-serif;
  color: ${((props) => props.theme.greyColor)};
  padding: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border: 5px solid transparent; border-top: 7px solid ${((props) => props.theme.greyColor)};
    top: 6px;
    right: -15px;
  }
`;