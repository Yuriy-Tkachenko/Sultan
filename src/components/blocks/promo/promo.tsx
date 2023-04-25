import React, {FC} from "react";
import { Wrapper, ConditionText, Name, Description, StyledImage } from "./styles";
import { IPromo } from "../../../types/types";

interface PromoProps {
  info: IPromo;
}

const Promo: FC<PromoProps> = ({info}) => {
  return(
    <Wrapper>
      <ConditionText>{info.condition}</ConditionText>
      <Name>{info.name}</Name>
      <Description>{info.description}</Description>
      <StyledImage src={info.image.src} srcSet={info.image.srcset} />
    </Wrapper>
  )
}

export default Promo;