import styled from "styled-components";
import { Ul } from "../../styled/styled";

export const StyledList = styled(Ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: ${((props) => props.theme.tabletWidth)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;