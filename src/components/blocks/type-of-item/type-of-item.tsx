import React, {FC} from "react";
import { ITypes } from "../../../types/types";
import { Item } from "../maker-item/styles";

interface TypeOFProps {
  type: ITypes;
}

const TypeOfItem: FC<TypeOFProps> = ({type}) => {
  return (
    <Item>{type.typeOfCare}</Item>
  )
}

export default TypeOfItem;