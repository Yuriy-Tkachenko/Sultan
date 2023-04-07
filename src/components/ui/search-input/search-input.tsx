import React from "react";
import { StyledInput, StyledForm, StyledButton } from "./styles";

function SearchInput() {
  return(
    <StyledForm>
      <StyledButton />
      <StyledInput placeholder='Поиск'/>
    </StyledForm>
  )
}

export default SearchInput;