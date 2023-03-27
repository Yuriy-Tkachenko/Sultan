import styled from "styled-components";
import { Input, Label, Button, Li } from "../../styled/styled";
import submitButton from "../../../assets/submit-button.svg";

export const StyledFooter = styled.footer`
  height: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.whiteColor};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin: 0 0 14px 0;
`;

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