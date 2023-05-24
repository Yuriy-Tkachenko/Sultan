import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    padding: 0 30px;
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
    padding: 0 15px;
  }
`;

export const Wrapper = styled.div`
  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftColumn = styled.div`

`;

export const RightColumn = styled.div`

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: 1020px;
  }
`;
