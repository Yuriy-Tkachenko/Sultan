export interface IImage {
  src?: string;
  srcset?: string;
  width?: number;
  height?: number;
};

export interface IProduct {
  id: number;
  name: string;
  description: string;
  quantity: number;
  type_quantity: string;
  barcode: number;
  maker: string;
  brand: string;
  price: string;
  image: IImage;
};

export interface IPromo {
  id: number;
  condition: string;
  name: string;
  description: string;
  image: IImage;
}