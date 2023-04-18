import React from "react";
import { Wrapper } from "./styles";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";

function PageWrapper() {
  return (
    <Wrapper>
      <Header />
      <MainPage />
      <Footer />
    </Wrapper>
  )
}

export default PageWrapper;