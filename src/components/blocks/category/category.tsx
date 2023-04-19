import React from "react";
import { Wrapper, Container, StyledTitle, Description, CategoryList } from "./styles";
import CategoryBlock from "../../ui/category-block/category-block";
import baby1x from "../../../assets/baby@1x.png";
import baby2x from "../../../assets/baby@2x.png";
import bath1x from "../../../assets/bath-products@1x.png";
import bath2x from "../../../assets/bath-products@2x.png";
import chemistry1x from "../../../assets/chemistry@1x.png";
import chemistry2x from "../../../assets/chemistry@2x.png";
import cleaning1x from "../../../assets/cleaning-products@1x.png";
import cleaning2x from "../../../assets/cleaning-products@2x.png";
import kitchen1x from "../../../assets/kitchen-products@1x.png";
import kitchen2x from "../../../assets/kitchen-products@2x.png";

function Category() {
  return(
    <Wrapper>
      <Container>
        <StyledTitle firstWord="категории" secondWord="товаров" />
        <Description>10 000+ ходовых позиций по специальным ценам</Description>
        <CategoryList>
          <CategoryBlock name="Бытовая химия" link1x={chemistry1x} link2x={chemistry2x}/>
          <CategoryBlock name="Косметика и гигиена" link1x={bath1x} link2x={bath2x}/>
          <CategoryBlock name="Товары для дома" link1x={cleaning1x} link2x={cleaning2x}/>
          <CategoryBlock name="Товары для детей и мам" link1x={baby1x} link2x={baby2x}/>
          <CategoryBlock name="Посуда" link1x={kitchen1x} link2x={kitchen2x}/>
        </CategoryList>
      </Container>
    </Wrapper>
  )
}

export default Category;