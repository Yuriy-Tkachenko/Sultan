import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${((props) => props.theme.greyColor)};

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 14px;
    color: ${((props) => props.theme.whiteColor)};
  }
`;