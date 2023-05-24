import React from "react";
import { Wrapper } from "./styles";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

function PageWrapper() {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  )
}

export default PageWrapper;