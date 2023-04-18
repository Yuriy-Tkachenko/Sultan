import React from "react";
import { StyledTitle, YellowText } from "./styles";

interface TextProps {
  firstWord: string;
  secondWord: string;
  marginBottom?: number;
}

function Title({firstWord, secondWord, marginBottom}: TextProps) {
  return(
    <StyledTitle style={{marginBottom}}>
      <YellowText>{firstWord}</YellowText> {secondWord}
    </StyledTitle>
  )
}

export default Title;