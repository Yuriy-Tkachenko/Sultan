import React, {FC} from "react";
import Title from "../../ui/title/title";
import { Wrapper, Container, StyledText, StyledSwiper } from "./styles";
import { IBrands } from "../../../types/types";
import Brand from "../brand/brand";

import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

interface BrandsProps {
  brands: IBrands[]
}

const BrandsList: FC<BrandsProps> = ({brands}) => {
  return(
    <Wrapper>
      <Container>
        <Title firstWord="лучшие" secondWord="бренды" />
        <StyledText>От ведущих мировых брендов</StyledText>
        <StyledSwiper
          slidesPerView='auto'
          spaceBetween={35}
        >
          {brands.map((brand) => (
            <SwiperSlide>
              <Brand brand={brand} key={brand.id}/>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Wrapper>
  )
}

export default BrandsList;