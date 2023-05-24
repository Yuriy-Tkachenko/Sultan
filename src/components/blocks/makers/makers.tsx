import React , {FC} from "react";
import { IMaker } from "../../../types/types";
import { MakersList, ButtonShow } from "./styles";
import { Li } from "../../styled/styled";
import MakerItem from "../maker-item/maker-item";

interface MakerProps {
  makers: IMaker[];
}

const Makers: FC<MakerProps> = ({makers}) => {
  return (
    <>
      <MakersList>
        {makers.map((maker) => (
          <Li>
            <MakerItem maker={maker} key={maker.id} />
          </Li>
        ))}
      </MakersList>
      <ButtonShow>Показать все</ButtonShow>
    </>
  )
}

export default Makers;