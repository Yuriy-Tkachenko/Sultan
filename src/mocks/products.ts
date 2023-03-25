import aos_img_1x from "../assets/aos-product@1x.png";
import aos_img_2x from "../assets/aos-product@2x.png";
import ariel_img_1x from "../assets/ariel-product@1x.png";
import ariel_img_2x from "../assets/ariel-product@2x.png";
import bimax_img_1x from "../assets/bimax-product@1x.png";
import bimax_img_2x from "../assets/bimax-product@2x.png";
import blend_img_1x from "../assets/blend-a-med-product@1x.png";
import blend_img_2x from "../assets/blend-a-med-product@2x.png";
import colgate_img_1x from "../assets/colgate-product@1x.png";
import colgate_img_2x from "../assets/colgate-product@2x.png";
import gillette_img_1x from "../assets/gillette-product@1x.png";
import gillette_img_2x from "../assets/gillette-product@2x.png";
import lafresh_img_1x from "../assets/la-fresh-product@1x.png";
import lafresh_img_2x from "../assets/la-fresh-product@2x.png";
import laf_img_1x from "../assets/LAF-product@1x.png";
import laf_img_2x from "../assets/LAF-product@2x.png";
import mysun_img_1x from "../assets/my-sun-product@1x.png";
import mysun_img_2x from "../assets/my-sun-product@2x.png";
import naturella_img_1x from "../assets/naturella-product@1x.png";
import naturella_img_2x from "../assets/naturella-product@2x.png";
import palmolive_img_1x from "../assets/palmolive-product@1x.png";
import palmolive_img_2x from "../assets/palmolive-product@2x.png";
import papia_img_1x from "../assets/papia-product@1x.png";
import papia_img_2x from "../assets/papia-product@2x.png";
import rexona_img_1x from "../assets/rexona-product@1x.png";
import rexona_img_2x from "../assets/rexona-product@2x.png";
import salfeti_img_1x from "../assets/salfeti-product@1x.png";
import salfeti_img_2x from "../assets/salfeti-product@2x.png";
import shoulders_img_1x from "../assets/shoulders-product@1x.png";
import shoulders_img_2x from "../assets/shoulders-product@2x.png";
import sorti_img_1x from "../assets/sorti-product@1x.png";
import sorti_img_2x from "../assets/sorti-product@2x.png";
import syoss_img_1x from "../assets/syoss-product@1x.png";
import syoss_img_2x from "../assets/syoss-product@2x.png";
import zewa_img_1x from "../assets/zewa-product@1x.png";
import zewa_img_2x from "../assets/zewa-product@2x.png";

const products = [
  {
    id: 0,
    name: 'Aos',
    description: 'средство для мытья посуды Crystal',
    quantity: '450',
    type_quantity: 'мл',
    barcode: 4604049097548,
    maker: 'Aos',
    brand: 'Aos',
    price: '480,76 ₸',
    image: {
      src: aos_img_1x,
      srcset: aos_img_2x
    },
    typefCare: 'уход за посудой'
  },
  {
    id: 1,
    name: 'Ariel',
    description: 'Автомат, гель жидки1 в растворимых капсулах Liquid Capsules Горный родник',
    quantity: '15X28.8',
    type_quantity: 'г',
    barcode: 4604049092587,
    maker: 'Ariel',
    brand: 'Ariel',
    price: '550,00 ₸',
    image: {
      src: ariel_img_1x,
      srcset: ariel_img_2x
    },
    typefCare: 'уход за одеждой'
  },
  {
    id: 2,
    name: 'Bimax',
    description: 'Порошок стиральный автомат 100 пятен COMPACT',
    quantity: '1500',
    type_quantity: 'г',
    barcode: 4604049098547,
    maker: 'Bimax',
    brand: 'Bimax',
    price: '800,00 ₸',
    image: {
      src: bimax_img_1x,
      srcset: bimax_img_2x
    },
    typefCare: 'уход за одеждой'
  },
  {
    id: 3,
    name: 'Blend-a-med',
    description: 'Зубная паста анти-кариес Свежесть',
    quantity: '100',
    type_quantity: 'мл',
    barcode: 4604049098847,
    maker: 'Blend-a-med',
    brand: 'Blend-a-med',
    price: '770,00 ₸',
    image: {
      src: blend_img_1x,
      srcset: blend_img_2x
    },
    typefCare: 'уход за зубами'
  },
  {
    id: 4,
    name: 'Colgate',
    description: 'Ополаскиватель для рта, тройное Действие антибактериальный',
    quantity: '500',
    type_quantity: 'мл',
    barcode: 4604058098847,
    maker: 'Colgate',
    brand: 'Colgate',
    price: '1001,00 ₸',
    image: {
      src: colgate_img_1x,
      srcset: colgate_img_2x
    },
    typefCare: 'уход за зубами'
  },
  {
    id: 5,
    name: 'Gillette',
    description: 'Бритва Fusion5 ProGlide FlexBall с 1 сменной кассетой',
    quantity: '1',
    type_quantity: 'шт',
    barcode: 4604058098796,
    maker: 'Gillette',
    brand: 'Gillette',
    price: '1520,00 ₸',
    image: {
      src: gillette_img_1x,
      srcset: gillette_img_2x
    },
    typefCare: 'уход за лицом'
  },
  {
    id: 6,
    name: 'La Fresh',
    description: 'Губка для тела массажная',
    quantity: '1',
    type_quantity: 'шт',
    barcode: 4604058296796,
    maker: 'La Fresh',
    brand: 'La Fresh',
    price: '432,00 ₸',
    image: {
      src: lafresh_img_1x,
      srcset: lafresh_img_2x
    },
    typefCare: 'уход за телом'
  },
  {
    id: 7,
    name: 'Laf',
    description: 'Маска для лица питательная с маслом ши',
    quantity: '1',
    type_quantity: 'шт',
    barcode: 4604058293654,
    maker: 'Laf',
    brand: 'Laf',
    price: '302,00 ₸',
    image: {
      src: laf_img_1x,
      srcset: laf_img_2x
    },
    typefCare: 'уход за лицом'
  },
  {
    id: 8,
    name: 'Мое Солнышко',
    description: 'Жидкое мыло авокадо',
    quantity: '400',
    type_quantity: 'мл',
    barcode: 4604058298963,
    maker: 'Мое Солнышко',
    brand: 'Мое Солнышко',
    price: '369,00 ₸',
    image: {
      src: mysun_img_1x,
      srcset: mysun_img_2x
    },
    typefCare: 'уход за телом'
  },
  {
    id: 9,
    name: 'Naturella',
    description: 'Прокладки Ultra Camomile Normal',
    quantity: '10',
    type_quantity: 'шт',
    barcode: 4604058293520,
    maker: 'Naturella',
    brand: 'Naturella',
    price: '505,00 ₸',
    image: {
      src: naturella_img_1x,
      srcset: naturella_img_2x
    },
    typefCare: 'уход за интимными местами'
  },
  {
    id: 10,
    name: 'Palmolive',
    description: 'Мыло натурэль интенсивное увлажнение с экстрактом оливы и увлажняющим молочком',
    quantity: '90',
    type_quantity: 'гр',
    barcode: 4604058293520,
    maker: 'Palmolive',
    brand: 'Palmolive',
    price: '505,00 ₸',
    image: {
      src: palmolive_img_1x,
      srcset: palmolive_img_2x
    },
    typefCare: 'уход за телом'
  },
  {
    id: 11,
    name: 'Papia',
    description: 'Туалетная бумага балийский цветок',
    quantity: '1',
    type_quantity: 'шт',
    barcode: 4604058299410,
    maker: 'Papia',
    brand: 'Papia',
    price: '1120,00 ₸',
    image: {
      src: papia_img_1x,
      srcset: papia_img_2x
    },
    typefCare: 'уход за интимными местами'
  },
  {
    id: 12,
    name: 'Rexona',
    description: 'Антиперспирант-спрей невидимый прозрачный кристал женский',
    quantity: '130',
    type_quantity: 'мл',
    barcode: 4604058299410,
    maker: 'Rexona',
    brand: 'Rexona',
    price: '891,00 ₸',
    image: {
      src: rexona_img_1x,
      srcset: rexona_img_2x
    },
    typefCare: 'уход за интимными местами'
  },
  {
    id: 13,
    name: 'Salfeti',
    description: 'Салфетки влажные антибактериальные 72шт',
    quantity: '72',
    type_quantity: 'шт',
    barcode: 4604058299410,
    maker: 'Salfeti',
    brand: 'Salfeti',
    price: '305,00 ₸',
    image: {
      src: salfeti_img_1x,
      srcset: salfeti_img_2x
    },
    typefCare: 'уход за руками'
  },
  {
    id: 14,
    name: 'Head&Shoulders',
    description: 'Шампунь и бальзам-ополаскиватель для волос',
    quantity: '400',
    type_quantity: 'мл',
    barcode: 4604058298514,
    maker: 'Head&Shoulders',
    brand: 'Head&Shoulders',
    price: '1500,00 ₸',
    image: {
      src: shoulders_img_1x,
      srcset: shoulders_img_2x
    },
    typefCare: 'уход за головой'
  },
  {
    id: 15,
    name: 'Sorti',
    description: 'Средство для мытья посуды',
    quantity: '450',
    type_quantity: 'мл',
    barcode: 4604058297154,
    maker: 'Sorti',
    brand: 'Sorti',
    price: '999,00 ₸',
    image: {
      src: sorti_img_1x,
      srcset: sorti_img_2x
    },
    typefCare: 'уход за посудой'
  },
  {
    id: 16,
    name: 'Syoss',
    description: 'Шампунь для волос Volume Collagen',
    quantity: '500',
    type_quantity: 'мл',
    barcode: 4604058292321,
    maker: 'Syoss',
    brand: 'Syoss',
    price: '1463,00 ₸',
    image: {
      src: syoss_img_1x,
      srcset: syoss_img_2x
    },
    typefCare: 'уход за головой'
  },
  {
    id: 17,
    name: 'Zewa',
    description: 'Бумажные полотенца 1/2 листа 4 рулона ',
    quantity: '1',
    type_quantity: 'шт',
    barcode: 4604058291130,
    maker: 'Zewa',
    brand: 'Zewa',
    price: '658,00 ₸',
    image: {
      src: zewa_img_1x,
      srcset: zewa_img_2x
    },
    typefCare: 'уход за руками'
  },
]

export default products;