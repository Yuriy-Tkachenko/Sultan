import React, {FC} from "react";
import { Ul, Li } from "../../styled/styled";
import { ITypes } from "../../../types/types";
import TypeOfItem from "../type-of-item/type-of-item";

interface TypeOFProps {
  types: ITypes[];
}

const TypesOfList: FC<TypeOFProps> = ({types}) => {
  return (
    <Ul>
      {types.map((type) => (
        <Li>
          <TypeOfItem type={type} key={type.id} />
        </Li>
      ))}
    </Ul>
  )
}

export default TypesOfList;