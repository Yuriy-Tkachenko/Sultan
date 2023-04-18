import aos_img_1x from "../assets/aos-product@1x.png";
import aos_img_2x from "../assets/aos-product@2x.png";
import ariel_img_1x from "../assets/ariel-product@1x.png";
import ariel_img_2x from "../assets/ariel-product@2x.png";
import bimax_img_1x from "../assets/bimax-product@1x.png";
import bimax_img_2x from "../assets/bimax-product@2x.png";
import blend_img_1x from "../assets/blend-a-med-product@1x.png";
import blend_img_2x from "../assets/blend-a-med-product@2x.png";

const topProducts = [
  {
    id: 0,
    name: 'Aos',
    description: 'средство для мытья посуды Crystal',
    quantity: 450,
    type_quantity: 'мл',
    barcode: 4604049097548,
    maker: 'Aos',
    brand: 'Aos',
    price: '480,76 ₸',
    image: {
      src: aos_img_1x,
      srcset: aos_img_2x,
      width: 92,
      height: 194,
    },
    typefCare: 'уход за посудой'
  },
  {
    id: 1,
    name: 'Ariel',
    description: 'Автомат, гель жидки1 в растворимых капсулах Liquid Capsules Горный родник',
    quantity: 15,
    type_quantity: 'г',
    barcode: 4604049092587,
    maker: 'Ariel',
    brand: 'Ariel',
    price: '550,00 ₸',
    image: {
      src: ariel_img_1x,
      srcset: ariel_img_2x,
      width: 202,
      height: 194,
    },
    typefCare: 'уход за одеждой'
  },
  {
    id: 2,
    name: 'Bimax',
    description: 'Порошок стиральный автомат 100 пятен COMPACT',
    quantity: 1500,
    type_quantity: 'г',
    barcode: 4604049098547,
    maker: 'Bimax',
    brand: 'Bimax',
    price: '800,00 ₸',
    image: {
      src: bimax_img_1x,
      srcset: bimax_img_2x,
      width: 178,
      height: 218,
    },
    typefCare: 'уход за одеждой'
  },
  {
    id: 3,
    name: 'Blend-a-med',
    description: 'Зубная паста анти-кариес Свежесть',
    quantity: 100,
    type_quantity: 'мл',
    barcode: 4604049098847,
    maker: 'Blend-a-med',
    brand: 'Blend-a-med',
    price: '770,00 ₸',
    image: {
      src: blend_img_1x,
      srcset: blend_img_2x,
      width: 180,
      height: 100,
    },
    typefCare: 'уход за зубами'
  }
]

export default topProducts;