import React from "react";
import { 
  StyledFooter, 
  Wrapper, 
  Description, 
  StyledForm, 
  FormCaption, 
  FormField, 
  SubmitButton,
  MenuItem, 
  MenuTitle,
  TypeOfCall,
  Info,
  CallButton
 } from "./styles";
import { ReactComponent as LogoImage } from "../../../assets/footer-logo.svg";
import { ReactComponent as VisaImage } from "../../../assets/visa-logo.svg";
import { ReactComponent as MCImage } from "../../../assets/mastercard-logo.svg";
import { ReactComponent as WhatsupImage } from "../../../assets/whatsup-logo.svg";
import { ReactComponent as TelegramImage } from "../../../assets/telegram-logo.svg";
import { Ul, Li } from "../../styled/styled";
import DownLoadButton from "../../ui/download-button/download-button";

function Footer() {
  return (
    <StyledFooter>
      <Wrapper style={{ marginBottom: '15px' }}>
        <LogoImage width={97} height={41}/>
        <DownLoadButton name="Прайс-лист" width={149} height={40}/>
      </Wrapper>
      <Description>
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
      </Description>
      <StyledForm typeof="submit">
        <FormCaption>Подпишись на скидки и акции</FormCaption>
        <FormField placeholder="Введите ваш E-mail" />
        <SubmitButton />
      </StyledForm>
      <Wrapper style={{ marginBottom: '25px' }}>
        <div style={{ marginBottom: 'auto' }}>
          <MenuTitle>Меню сайта:</MenuTitle>
          <Ul>
            <MenuItem>О компании</MenuItem>
            <MenuItem>Доставка и оплата</MenuItem>
            <MenuItem>Возврат</MenuItem>
            <MenuItem>Контакты</MenuItem>
          </Ul>
        </div>
        <div style={{ marginBottom: 'auto' }}>
          <MenuTitle>Категории:</MenuTitle>
          <Ul>
            <MenuItem>Бытовая химия</MenuItem>
            <MenuItem>Косметика и гигиена</MenuItem>
            <MenuItem>Товары для дома</MenuItem>
            <MenuItem>Товары для детей и мам</MenuItem>
            <MenuItem>Посуда</MenuItem>
          </Ul>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <MenuTitle style={{ marginBottom: '25px' }}>Контакты:</MenuTitle>
          <Ul>
            <Li style={{ marginBottom: '25px' }}>
              <TypeOfCall>+7 (777) 490-00-91</TypeOfCall>
              <Info>время работы: 9:00-20:00</Info>
              <CallButton>Заказать звонок</CallButton>
            </Li>
            <Li style={{ marginBottom: '10px' }}>
              <TypeOfCall>opt.sultan@mail.ru</TypeOfCall>
              <Info>На связи в любое время</Info>
            </Li>
            <Li>
              <VisaImage style={{ marginRight: '5px' }} />
              <MCImage />
            </Li>
          </Ul>
        </div>
        <div>
          <Info style={{ marginBottom: '17px' }}>Связь<br />в мессенджерах:</Info>
          <div>
            <WhatsupImage style={{ marginRight: '10px' }} />
            <TelegramImage />
          </div>
        </div>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer;