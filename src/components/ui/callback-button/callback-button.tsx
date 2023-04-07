import React from "react";
import { StyledButton, ButtonName, ButtonIcon, Number, Description } from "./styles";

function CallbackButton() {
  return(
    <StyledButton>
      <ButtonIcon />
      <Number>+7 (777) 490-00-91</Number>
      <Description>время работы: 9:00-20:00</Description>
      <ButtonName>Заказать звонок</ButtonName>
    </StyledButton>
  )
}

export default CallbackButton;