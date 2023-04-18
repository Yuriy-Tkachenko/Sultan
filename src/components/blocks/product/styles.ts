import styled from "styled-components"

export const Wrapper = styled.div`
  width: 326px;
  height: 100%;
  position: relative;
  padding: 29px 49px 29px 15px;
  box-shadow: 0px 14px 39px -11px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Raiting = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${((props) => props.theme.whiteColor)};
  background-color: ${((props) => props.theme.greenColor)};
  border-radius: 5px;
  width: 96px;
  box-sizing: border-box;
  padding: 5px 10px;
`;

export const ImageWrapper = styled.div`
  width: 249px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Image = styled.img`
  align-self: center;
  justify-self: center;
`;

export const Quantity = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${((props) => props.theme.greyColor)};
  padding-left: 17px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: ${((props) => props.theme.blackColor)};
  max-width: 282px;
  //margin-bottom: 20px;
`;

export const ProductName = styled.b`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`;

export const Property = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${((props) => props.theme.greyColor)}
`;

export const Value = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${((props) => props.theme.blackColor)};
`;

export const Price = styled.b`
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  color: ${((props) => props.theme.blackColor)};
`;

export const AlignBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;