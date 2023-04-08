import React from "react";
import {ButtonWrapper, ButtonText} from "./styles";

interface ButtonProps {
  name: string;
  width: number;
  height: number;
  top?: number;
  right?: number;
  marginBottom?: string;
}

function DownloadButton({name, width, height, top, right, marginBottom}: ButtonProps) {
  return (
    <ButtonWrapper style={{width, height, top, right, marginBottom}}>
      <ButtonText>{name}</ButtonText>
    </ButtonWrapper>
  )
}

export default DownloadButton;
