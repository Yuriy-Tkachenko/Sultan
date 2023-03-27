import React from "react";
import { Wrapper } from "./styles";
import Header from "../header/header";
import Footer from "../footer/footer";

function PageWrapper() {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  )
}

export default PageWrapper;