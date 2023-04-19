import React from "react";
import { Main, MainOffer, Wrapper, Title, TextWrapper, Text, Offers } from "./styles";
import Offer from "../../ui/offer/offer";
import PromotionalProducts from "../../blocks/promotional-products/promotional-products";
import Category from "../../blocks/category/category";

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
    </Main>
  )
}

export default MainPage;