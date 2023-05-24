import React from "react";
import { ParametersTitleWrapper, ParametersTitle, ParametersButton, ButtonsWrapper } from "./styles";
import PriceFilter from "../price-filter/price-filter";
import MakerFilter from "../maker-filter/maker-filter";
import TypeOfFilter from "../type-of-filter/type-of-filter";
import Button from "../../ui/button/button";
import ButtonDelete from "../../ui/button-delete/button-delete";

function Parameters() {
  return (
    <>
      <ParametersTitleWrapper>
        <ParametersTitle>Подбор по параметрам</ParametersTitle>
        <ParametersButton />
      </ParametersTitleWrapper>
      <PriceFilter />
      <MakerFilter />
      <TypeOfFilter />
      <ButtonsWrapper>
        <Button name="Показать" />
        <ButtonDelete />
      </ButtonsWrapper>
    </>
  )
}

export default Parameters;