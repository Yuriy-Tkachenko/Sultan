import React, {FC} from "react";
import Product from "../product/product";
import { IProduct } from "../../../types/types";
import { Li } from "../../styled/styled";
import { StyledList } from "./styles";

interface ProductsProps {
  products: IProduct[]
}

const ProductList: FC<ProductsProps> = ({products}) => {
  return(products?.length ? (
    <StyledList style={{display: 'flex'}}>
      {products.map(product => 
        <Li>
          <Product product={product} key={product.id}/>
        </Li>
      )}
    </StyledList>
    ) : null
  )
}

export default ProductList;