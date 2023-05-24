import React, {FC} from "react";
import { StyledLink, Logo } from "./styles";

interface ButtonProps {
  to: string;
}

const HeaderLogo: FC<ButtonProps> = ({to}) => {
  return(
    <StyledLink to={to}>
      <Logo />
    </StyledLink>
  )
}

export default HeaderLogo;