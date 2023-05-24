import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import Catalog from "../pages/catalog/catalog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<MainPage />}/>
            <Route path="catalog.html" element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
