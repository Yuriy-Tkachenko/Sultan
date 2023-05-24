import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  name: string;
}

function Button ({name}: ButtonProps) {
  return (
    <StyledButton>{name}</StyledButton>
  )
}

export default Button;