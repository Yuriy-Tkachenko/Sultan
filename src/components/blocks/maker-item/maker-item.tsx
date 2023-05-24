import React, {FC} from "react";
import { IMaker } from "../../../types/types";
import { Item } from "./styles";

interface MakerProps {
  maker: IMaker;
}

const MakerItem: FC<MakerProps> = ({maker}) => {
  return (
    <Item>{maker.maker}</Item>
  )
}

export default MakerItem;