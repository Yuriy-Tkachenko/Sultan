import React from "react";
import { Wrapper } from "./styles";
import Header from "../header/header";
import Footer from "../footer/footer";
//import MainPage from "../../pages/main-page/main-page";
import Catalog from "../../pages/catalog/catalog";

function PageWrapper() {
  return (
    <Wrapper>
      <Header />
      <Catalog />
      <Footer />
    </Wrapper>
  )
}

export default PageWrapper;