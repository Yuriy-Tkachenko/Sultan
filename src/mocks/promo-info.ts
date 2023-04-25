import housewife1x from "../assets/housewife@1x.png";
import housewife2x from "../assets/housewife@2x.png";

const promoInfo = [
  {
    id: 0,
    condition: '* акция действует до 01/08/23',
    name: 'Скидка 30% на бытовую химию',
    description: 'При покупке товаров на сумму от 10000 ₸',
    image: {
      scr: housewife1x,
      srcset: housewife2x,
    }
  },
  {
    id: 1,
    condition: '* акция действует до 01/10/23',
    name: 'Кэшбэк 5%',
    description: 'При оплате картой Halyk Bank',
    image: {
      src: housewife1x,
      srcset: housewife2x,
    }
  },
  {
    id: 2,
    condition: '* акция действует до 01/12/23',
    name: 'Получи приз',
    description: 'Оформи карту нашего магазина и получи приз на первую покупку!',
    image: {
      src: housewife1x,
      srcset: housewife2x,
    }
  }
]

export default promoInfo;