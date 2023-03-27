import React from "react";
import {ButtonWrapper, ButtonText} from "./styles";

interface ButtonProps {
  name: string;
  width: number;
  height: number;
}

function DownloadButton({name, width, height}: ButtonProps) {
  return (
    <ButtonWrapper style={{width, height}}>
      <ButtonText>{name}</ButtonText>
    </ButtonWrapper>
  )
}

export default DownloadButton;
