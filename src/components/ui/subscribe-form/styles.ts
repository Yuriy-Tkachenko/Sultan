import styled from "styled-components";
import { Input, Label, Button } from "../../styled/styled";
import submitButton from "../../../assets/submit-button.svg";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 282px;
  margin-bottom: 30px;
  position: relative;
`;

export const FormCaption = styled(Label)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 14px;
`;

export const FormField = styled(Input)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  border-radius: 36px;
  padding: 20px;

  &:placeholder-shown {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${(props) => props.theme.lightGreyColor};
  }
`;

export const SubmitButton = styled(Button)`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-image: url(${submitButton});
  position: absolute;
  top: 42px;
  right: 15px;
`;