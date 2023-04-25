import styled from "styled-components";
import Title from "../../ui/title/title";
import { Ul } from "../../styled/styled";

export const Wrapper = styled.section`
  padding: 0 15px;
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

export const StyledTitle = styled(Title)`
  margin-bottom: 10px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: ${((props) => props.theme.greyColor)};
  margin-bottom: 25px;
  width: 182px;
  display: inline-block;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    font-size: 20px;
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const CategoryList = styled(Ul)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media(min-width: ${((props) => props.theme.tabletWidth)}) {
    margin-bottom: 100px;
  }
`;