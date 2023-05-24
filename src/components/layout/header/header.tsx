import React from "react";
import { 
  StyledHeader, MenuWrapper, UserNavigation, 
  SiteNavigation, InfoWrapper, 
  ListInfo, ItemInfo, Info, Description, Wrapper
} from "./styles";
import HeaderLogo from "../../ui/header-logo/header-logo";
import ButtonClose from "../../ui/button-close/button-close";
import BasketButton from "../../ui/basket-button/basket-button";
import DownLoadButton from "../../ui/download-button/download-button";
import CatalogButton from "../../ui/catalog-button/catalog-button";
import SearchInput from "../../ui/search-input/search-input";
import CallbackButton from "../../ui/callback-button/callback-button";

import tagPicture from "../../../assets/tag.svg";
import mailPicture from "../../../assets/mail.svg";
import phonePicture from "../../../assets/phone.svg";


function Header() {
  return (
    <StyledHeader>
      <UserNavigation>
        <MenuWrapper>
          <ButtonClose />
          <HeaderLogo to="/" />
        </MenuWrapper>
        <Wrapper>
          <CatalogButton to="/catalog.html" children="Каталог"/>
          <SearchInput />
          <CallbackButton />
          <DownLoadButton name="Прайс-лист" width={200} height={59}/>
          <BasketButton />
        </Wrapper>
      </UserNavigation>
      <SiteNavigation>
        <InfoWrapper>
          <ListInfo>
            <ItemInfo>
              <img src={tagPicture} width={13.3} height={16.6} style={{ marginRight: '18px' }} alt='Логотип метки'/>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Info>г. Кокчетав, ул. Ж. Ташенова 129Б</Info>
                <Description>(Рынок Восточный)</Description>
              </div>
            </ItemInfo>
            <ItemInfo>
              <img src={mailPicture} width={16.6} height={13.3} style={{ marginRight: '18px' }} alt='Логотип письма'/>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Info>opt.sultan@mail.ru</Info>
                <Description>На связи в любое время</Description>
              </div>
            </ItemInfo>
            <ItemInfo>
              <img src={phonePicture} width={14.6} height={14.6} style={{ marginRight: '18px' }} alt='Логотип телефона'/>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Info>Отдел продаж</Info>
                <Description>+7 (777) 490-00-91</Description>
              </div>
            </ItemInfo>
          </ListInfo>
        </InfoWrapper>
      </SiteNavigation>
    </StyledHeader>
  )
}

export default Header;