import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
  text-transform: uppercase;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-weight: 800;
    font-size: 40px;
    line-height: 120%;
  }
`;

export const YellowText = styled.span`
  color: ${((props) => props.theme.yellowBackground)};
`;