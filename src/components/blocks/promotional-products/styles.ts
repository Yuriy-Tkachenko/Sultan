import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledTitle = styled(Title)`
  margin-bottom: 25px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 15px;
  margin-bottom: 82px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    width: ${((props) => props.theme.tabletWidth)};
  }

  @media(min-width: ${((props) => props.theme.desktopWidth)}) {
    width: ${((props) => props.theme.desktopWidth)};
  }
`;