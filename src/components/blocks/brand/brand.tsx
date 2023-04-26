import React, {FC} from "react";
import { IBrands } from "../../../types/types";
import { StyledImage } from "./styles";

interface BrandProps {
  brand: IBrands;
}

const Brand: FC<BrandProps> = ({brand}) => {
  return(
    <StyledImage src={brand.image.src} srcSet={brand.image.srcset} width={brand.image.width} height={brand.image.height}/>
  )
}

export default Brand;