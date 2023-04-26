import React from "react";
import { Main, MainOffer, Wrapper, Title, TextWrapper, Text, Offers } from "./styles";
import Offer from "../../ui/offer/offer";
import PromotionalProducts from "../../blocks/promotional-products/promotional-products";
import Category from "../../blocks/category/category";
import PromoList from "../../blocks/promo-list/promo-list";
import BrandsList from "../../blocks/brands-list/brands-list";
import Map from "../../blocks/map/map";

import promoInfo from "../../../mocks/promo-info";
import brands from "../../../mocks/brands";

function MainPage() {
  return(
    <Main>
      <MainOffer>
        <Wrapper>
          <TextWrapper>
            <Title>Бытовая химия, косметика и хозтовары</Title>
            <Text>оптом по кокчетаву и области</Text>
            <Offers>
              <Offer name="Только самые выгодные предложения" />
              <Offer name="Бесплатная доставка по Кокчетаву от 10 тыс ₸" />
            </Offers>
          </TextWrapper>
        </Wrapper>
      </MainOffer>
      <PromotionalProducts />
      <Category />
      <PromoList infos={promoInfo}/>
      <BrandsList brands={brands} />
      <Map />
    </Main>
  )
}

export default MainPage;