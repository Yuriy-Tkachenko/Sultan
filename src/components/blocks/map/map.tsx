import React from "react";
import { TileLayer, Marker } from "react-leaflet";
import { MapSection, StyledContainer, StyledPopup, StyledTitle, Styledtext, StyledList, StyledLi, StyledCaption, StyledDescription } from "./styles";

function Map() {
  return(
    <MapSection>
      <StyledContainer center={[53.268137, 69.407621]} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[53.268137, 69.407621]}>
        <StyledPopup>
          <StyledTitle>Контакты</StyledTitle>
          <Styledtext>Оптовый поставщик «Султан»</Styledtext>
          <StyledList>
            <StyledLi>
              <StyledCaption>Адрес:</StyledCaption>
              <StyledDescription>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</StyledDescription>
            </StyledLi>
            <StyledLi>
              <StyledCaption>Отдел продаж:</StyledCaption>
              <StyledDescription>+7 (777) 490-00-91</StyledDescription>
              <StyledDescription>opt.sultan@mail.ru</StyledDescription>
            </StyledLi>
            <StyledLi>
              <StyledCaption>Данные налогоплательщика:</StyledCaption>
              <StyledDescription>ИП Катран Д.С.</StyledDescription>
              <StyledDescription>ИИН: 860113450858</StyledDescription>
            </StyledLi>
          </StyledList>
        </StyledPopup>
      </Marker>
      </StyledContainer>
    </MapSection>
  )
}

export default Map;