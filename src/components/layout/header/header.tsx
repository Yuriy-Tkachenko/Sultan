import React from "react";
import { 
  StyledHeader, MenuWrapper, UserNavigation, 
  NavButton, NavDescription, SiteNavigation, InfoWrapper, 
  ListInfo, ItemInfo, Info, Description, CallBackButton, 
  ButtonIcon, ButtonName, MenuTitle, MenuItem, DownloadButton, ButtonText
} from "./styles";
import { Ul } from "../../styled/styled";
import Button from "../../ui/button/button";
import BasketButton from "../../ui/basket-button/basket-button";

import { ReactComponent as LogoImage } from "../../../assets/header-logo.svg";
import tagPicture from "../../../assets/tag.svg";
import mailPicture from "../../../assets/mail.svg";
import phonePicture from "../../../assets/phone.svg";
import search from "../../../assets/search-logo.svg";
import box from "../../../assets/cube.svg"

function Header() {
  return (
    <StyledHeader>
      <MenuWrapper>
        <Button />
        <LogoImage />
        <BasketButton />
      </MenuWrapper>
      <UserNavigation>
        <NavButton>
          <img src={box} width={15} height={15} style={{ marginRight: '6px' }} alt={'Логотип кубов'} />
          <NavDescription>Каталог</NavDescription>
        </NavButton>
        <NavButton>
          <img src={search} width={15} height={15} style={{ marginRight: '6px' }} alt={'Логотип лупы'}/>
          <NavDescription>Поиск</NavDescription>
        </NavButton>
      </UserNavigation>
      <SiteNavigation>
        <InfoWrapper style={{ marginBottom: '50px' }}>
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
          <CallBackButton>
            <ButtonIcon />
            <ButtonName>Заказать звонок</ButtonName>
          </CallBackButton>
        </InfoWrapper>
        <div style={{ marginBottom: '22px' }}>
          <MenuTitle>Меню сайта:</MenuTitle>
          <Ul>
            <MenuItem>О компании</MenuItem>
            <MenuItem>Доставка и оплата</MenuItem>
            <MenuItem>Возврат</MenuItem>
            <MenuItem>Контакты</MenuItem>
          </Ul>
        </div>
        <DownloadButton>
          <ButtonText>Прайс-лист</ButtonText>  
        </DownloadButton>
      </SiteNavigation>
    </StyledHeader>
  )
}

export default Header;