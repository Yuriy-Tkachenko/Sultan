import React from "react";
import { CardWrapper, CardBlock, StyledImage, Description } from "./styles";

interface CardProps {
  name: string;
  link1x: string;
  link2x?: string;
}

function CategoryBlock({name, link1x, link2x}: CardProps) {
  return(
    <CardWrapper>
      <CardBlock>
        <StyledImage src={link1x} srcSet={link2x} />
      </CardBlock>
      <Description>{name}</Description>
    </CardWrapper>
    
  )
}

export default CategoryBlock;