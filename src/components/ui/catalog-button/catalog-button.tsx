import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  name: string;
}

function CatalogButton({name}: ButtonProps) {
  return(
    <StyledButton>{name}</StyledButton>
  )
}

export default CatalogButton;