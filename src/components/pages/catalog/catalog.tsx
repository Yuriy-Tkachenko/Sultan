import React from "react";
import { Main, Container, Wrapper, LeftColumn, RightColumn } from "./styles";
import Parameters from "../../blocks/parameters/parameters";
import Title from "../../ui/title/title";
import ProductList from "../../blocks/product-list/product-list";

import products from "../../../mocks/products";

function Catalog() {
  return(
    <Main>
      <Container>
        <Title firstWord="Косметика" secondWord="и гигиена" marginBottom={15}/>
        <Wrapper>
          <LeftColumn>
            <Parameters />
          </LeftColumn>
          <RightColumn>
            <ProductList products={products}/>
          </RightColumn>
        </Wrapper>
      </Container>
    </Main>
  )
}

export default Catalog;