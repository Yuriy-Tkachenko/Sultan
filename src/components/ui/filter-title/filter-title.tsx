import {Title} from "./styles"

interface TextProps {
  text: string;
  marginBottom?: number;
}

function FilterTitle({text, marginBottom}: TextProps) {
  return (
    <Title style={{marginBottom}}>{text}</Title>
  )
}

export default FilterTitle;