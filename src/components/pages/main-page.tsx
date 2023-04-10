import React from "react";
import { Main, Container, Wrapper, Title, TextWrapper, Text, Offers } from "./styles";
import Offer from "../ui/offer/offer";

function MainPage() {
  return(
    <Main>
      <Wrapper>
        <TextWrapper>
          <Title>Бытовая химия, косметика и хозтовары</Title>
          <Text>оптом по кокчетаву и области</Text>
        </TextWrapper>
        <Offers>
          <Offer name="Только самые выгодные предложения" />
          <Offer name="Бесплатная доставка по Кокчетаву от 10 тыс ₸" />
        </Offers>
      </Wrapper>
      <Container>

      </Container>
    </Main>
  )
}

export default MainPage;