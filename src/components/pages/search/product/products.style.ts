import { devices } from "@/app/global.screen";
import styled from "styled-components";

const ProductComponent = {

    ProductsConteiner: styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 30px;
    gap: 12px;
    @media ${devices["2xl"]} {
      grid-template-columns: repeat(2, auto);
    }
  `,

  ProductCase: styled.div`
    color: black;
    width: 280px;
    height: 430px;
    display: flex;
    border-radius: 7px;
    font-weight: 400;
    padding-bottom: 50px;
    flex-direction: column;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.colors.bg};
    box-shadow: 0 0 2px ${(props) => props.theme.colors.shadow};
    &:hover {
      box-shadow: 0 0 7px ${(props) => props.theme.colors.shadow};
      color: ${(props) => props.theme.colors.blue};
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
    width: 100%;
    height: 300px;
    background-color: #aaa;
    border-radius: 7px 7px 0 0;
  `,

  ProductImg: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 7px 7px 0 0;
  `,

  ProductDesc: styled.div`
    width: 100%;
    padding-left: 15px;
    h2 {
      font-size: 14px;
      padding-top: 15px;
    }
    h3 {
      color: ${(props) => props.theme.colors.shadow};
      font-size: 11px;
    }
    @media ${devices.sm} {
      height: 55px;
      h2 {
        font-size: 12px;
      }
      h3 {
        font-size: 10px;
      }
    }
  `,
  PriceAndButton: styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 18px;
    }
    @media ${devices.sm} {
      &p {
        font-size: 12px;
      }
    }
  `,
}

export {ProductComponent}