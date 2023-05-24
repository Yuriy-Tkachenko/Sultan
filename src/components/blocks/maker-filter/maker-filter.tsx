import React from "react";
import { Wrapper } from "./styles";
import FilterTitle from "../../ui/filter-title/filter-title";
import Makers from "../makers/makers";

import makers from "../../../mocks/makers";

function MakerFilter() {
  return (
    <Wrapper>
      <FilterTitle text="Производитель" marginBottom={15} />
      <Makers makers={makers} />
    </ Wrapper>
  )
}

export default MakerFilter;