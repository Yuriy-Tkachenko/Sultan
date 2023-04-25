import mobileHousewife1x from "../assets/mobile-housewife@1x.png";
import mobileHousewife2x from "../assets/mobile-housewife@2x.png";
import houseWife1x from "../assets/housewife@1x.png";
import houseWife2x from "../assets/housewife@2x.png";

const promoInfo = [
  {
    id: 0,
    condition: '* акция действует до 01/08/23',
    name: 'Скидка 30% на бытовую химию',
    description: 'При покупке товаров на сумму от 10000 ₸',
    image: {
      mobileSrc: mobileHousewife1x,
      mobileSrcset: mobileHousewife2x,
      src: houseWife1x,
      srcset: houseWife2x
    }
  },
  {
    id: 1,
    condition: '* акция действует до 01/10/23',
    name: 'Кэшбэк 5%',
    description: 'При оплате картой Halyk Bank',
    image: {
      mobileSrc: mobileHousewife1x,
      mobileSrcset: mobileHousewife2x,
      src: houseWife1x,
      srcSet: houseWife2x
    }
  },
  {
    id: 2,
    condition: '* акция действует до 01/12/23',
    name: 'Получи приз',
    description: 'Оформи карту нашего магазина и получи приз на первую покупку!',
    image: {
      mobileSrc: mobileHousewife1x,
      mobileSrcset: mobileHousewife2x,
      src: houseWife1x,
      srcSet: houseWife2x
    }
  }
]

export default promoInfo;