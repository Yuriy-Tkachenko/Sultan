import React, {FC} from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: string;
  to: string;
}

const CatalogButton: FC<ButtonProps> = ({children, to}) => {
  return (
    <StyledButton to={to}>{children}</StyledButton>
  )
}

export default CatalogButton;