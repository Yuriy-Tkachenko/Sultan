import React from "react";
import { Wrapper } from "./styles";
import FilterTitle from "../../ui/filter-title/filter-title";
import TypesOfList from "../types-of-list/types-of-list";

import types from "../../../mocks/types";

function TypeOfFilter() {
  return (
    <Wrapper>
      <FilterTitle text="Тип ухода" />
      <TypesOfList types={types} />
    </Wrapper>
  )
}

export default TypeOfFilter;