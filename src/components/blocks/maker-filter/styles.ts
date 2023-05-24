import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 238px;
    border: 1px dashed ${((props) => props.theme.greyColor)};
    left: 0;
    bottom: -20px;
  }
`;