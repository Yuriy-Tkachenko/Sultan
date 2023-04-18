import React from "react";
import { Wrapper, Container, StyledTitle } from "./styles";
import ProductList from "../product-list/product-list";
import topProducts from "../../../mocks/top-products";

function PromotionalProducts() {
  return(
    <Wrapper>
      <Container>
        <StyledTitle firstWord='Акционные' secondWord='товары' />
        <ProductList products={topProducts}/>
      </Container>
    </Wrapper>
  )
}

export default PromotionalProducts;