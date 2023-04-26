import styled from "styled-components";

export const Text = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: ${((props) => props.theme.greyColor)};

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 20px;
  }
`;