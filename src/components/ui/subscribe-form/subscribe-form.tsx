import React from "react";
import { StyledForm, FormCaption, FormField, SubmitButton } from "./styles";

function SubscribeForm() {
  return(
    <StyledForm typeof="submit">
      <FormCaption>Подпишись на скидки и акции</FormCaption>
      <FormField placeholder="Введите ваш E-mail" />
      <SubmitButton />
    </StyledForm>
  )
}

export default SubscribeForm;