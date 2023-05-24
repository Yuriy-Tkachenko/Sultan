import React from "react";
import { PriceWrapper, PriceTitle, PriceControlWrapper, PriceInput } from "./styles";

function PriceFilter() {
  return (
    <PriceWrapper>
      <PriceTitle>Цена <span style={{fontWeight: 'bold'}}>₸</span></PriceTitle>
      <PriceControlWrapper>
        <PriceInput placeholder="0"/>
        <span>-</span>
        <PriceInput placeholder="10000"/>
      </PriceControlWrapper>
    </PriceWrapper>
  )
}

export default PriceFilter;