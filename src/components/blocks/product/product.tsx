import React, {FC} from "react";
import { Wrapper, Raiting, Image, ImageWrapper, Quantity, Description, ProductName, Property, Value, Price, AlignBlock } from "./styles";
import { Ul, Li } from "../../styled/styled";
import { IProduct } from "../../../types/types";
import ButtonBuy from "../../ui/button-buy/button-buy";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({product}) => {
  return(
    <Wrapper>
      <ImageWrapper>
        <Raiting>Популярное</Raiting>
        <Image src={product.image.src} srcSet={product.image.srcset} style={{ width: product.image.width, height: product.image.height }}/>
        <Quantity>{product.quantity} {product.type_quantity}</Quantity>
      </ImageWrapper>
      <div>
        <Description>
          <ProductName>{product.name} </ProductName>
          {product.description}
        </Description>
      </div>
      <Ul>
        <Li>
          <Property>Штрихкод: </Property>
          <Value>{product.barcode}</Value>
        </Li>
        <Li>
          <Property>Производитель: </Property>
          <Value>{product.maker}</Value>
        </Li>
        <Li>
          <Property>Бренд: </Property>
          <Value>{product.brand}</Value>
        </Li>
      </Ul>
      <AlignBlock>
        <Price>{product.price}</Price>
        <ButtonBuy />
      </AlignBlock>
    </Wrapper>
  )
}

export default Product;