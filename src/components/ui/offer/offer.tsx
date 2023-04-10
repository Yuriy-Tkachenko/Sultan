import React from "react"
import { Wrapper, Text } from "./styles";

interface OfferProps {
  name: string;
}

function Offer({name}: OfferProps) {
  return(
    <Wrapper>
      <Text>{name}</Text>
    </Wrapper>
  )
}

export default Offer;