import { devices } from "@/app/global.screen"
import styled from "styled-components"


const ProductsInCartComponent = {

    ProductCase: styled.div`
    width: 700px;
    height: 150px;
    font-weight: 600;
    margin: 0 10px 10px 0;
    display: flex;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.colors.white};
    &:hover {
      box-shadow: 0 0 14px ${(props) => props.theme.colors.shadow};
    }
    @media ${devices.xl} {
      width: 360px;
    }
    @media ${devices.lg} {
      width: 320px;
    }
    @media ${devices.sm} {
      width: 280px;
    }
  `,
   ProductImgConteiner: styled.div`
    width: 120px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.shadow};
    & img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
  `,
   ConteinerToAlign: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
  `,
   ProductDesc: styled.div`
    width: 100%;
    height: 150px;
    padding-left: 5px;
    h2 {
      font-size: 14px;
      padding-top: 5px;
    }
    h3 {
      color: ${(props) => props.theme.colors.shadow};
      font-size: 11px;
    }
    button {
      display: flex;
      align-items: center;
      gap: 5px;
      width: auto;
      height: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
        & span {
          color: ${(props) => props.theme.colors.blue};
          font-weight: 600;
        }
    }

    @media ${devices.sm} {
      height: 55px;
      h2 {
        font-size: 12px;
      }
      h3 {
        font-size: 10px;
      }
      p {
        font-size: 12px;
      }
    }
  `,
   PriceAndButton: styled.div`
    width: 100%;
    height: 150px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    p {
      font-size: 14px;
    }
    @media ${devices.sm} {
      &p {
        font-size: 12px;
      }
    }
  `,
   QuatityCase: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `,
   QuatityBntLess: styled.button`
    width: 30px;
    height: 30px;
    border-radius: 9999px 0 0 9999px;
    border: none;
    background-color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  `,
   QuatityBntMore: styled.button`
    width: 30px;
    height: 30px;
    border-radius: 0 9999px 9999px 0;
    border: none;
    background-color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  `,
   RemoveBtn: styled.button`
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    border: none;
    //background-color: #BF0426;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `


}
export {ProductsInCartComponent}