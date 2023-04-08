import React from "react";
import { 
  StyledFooter,
  Container,
  Wrapper, 
  Description,
  MenuItem, 
  MenuTitle,
  TypeOfCall,
  Info,
  CallButton,
  Caption
 } from "./styles";
import FooterLogo from "../../ui/footer-logo/footer-logo";
import SubscribeForm from "../../ui/subscribe-form/subscribe-form";
import DownloadButton from "../../ui/download-button/download-button";
import { ReactComponent as VisaImage } from "../../../assets/visa-logo.svg";
import { ReactComponent as MCImage } from "../../../assets/mastercard-logo.svg";
import { ReactComponent as WhatsupImage } from "../../../assets/whatsup-logo.svg";
import { ReactComponent as TelegramImage } from "../../../assets/telegram-logo.svg";
import { Ul, Li } from "../../styled/styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <FooterLogo />
          <Description>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
          </Description>
          <SubscribeForm />
        </Wrapper>
        <Wrapper style={{ marginBottom: '25px' }}>
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
        </Wrapper>
        <Wrapper>
          <Caption>Скачать прайс-лист:</Caption>
          <DownloadButton name="Прайс-лист" width={149} height={40} top={16} right={15} marginBottom='15px'/>
          <Info style={{ marginBottom: '17px' }}>Связь<br />в мессенджерах:</Info>
          <div>
            <WhatsupImage style={{ marginRight: '10px' }} />
            <TelegramImage />
          </div>
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}

export default Footer;