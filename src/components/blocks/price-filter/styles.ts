import styled from "styled-components";
import { Input } from "../../styled/styled";

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceTitle = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${((props) => props.theme.greyColor)};
  margin-bottom: 16px;
`;

export const PriceControlWrapper = styled.div`
  width: 232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const PriceInput = styled(Input)`
  width: 100px;
  height: 23px;
  border-radius: 100px;
  background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
  text-align: center;
`;