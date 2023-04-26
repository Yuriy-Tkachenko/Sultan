import React from "react";
import { Text } from "./styles";

interface TextProps {
  text: string;
}

function TextDescription({text}: TextProps) {
  return(
    <Text>{text}</Text>
  )
}

export default TextDescription;
