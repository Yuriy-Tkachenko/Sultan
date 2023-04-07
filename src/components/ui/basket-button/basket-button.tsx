import React from "react";
import { StyledButton, Name, Price, TextWrapper, Logo, Counter } from "./styles";

function BasketButton() {
  return (
    <StyledButton>
      <Logo />
      <Counter>0</Counter>
      <TextWrapper>
        <Name>Корзина</Name>
        <Price>0 ₸</Price>
      </TextWrapper>
    </StyledButton>
  )
}

export default BasketButton;