import { devices } from "@/app/global.screen";
import styled from "styled-components";

const ProductComponent = {
  Conteiner: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  `,
  AlignConteiner: styled.div`
    width: ${(props) => props.theme.lengths.higth};
    height: auto;
  `,
  ProductConteiner: styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    gap: 25px;
    margin: 32px 0;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.bg};
    display: block;
    border-radius: 7px;
    a {
      text-decoration: none;
      color: black;
      width: 100%;
      height: 100%;
    }

    @media ${devices["2xl"]} {
      
    }
  `,

  Text: styled.div`
    width: 100%;
    height: 50px;
    font-weight: 600;
    font-size: 20px;
    padding-top: 12px;
  `,
  ProductCaseConteiner: styled.section`
    width: 100%;
    height: 435px;
    display: flex;
  `,
  ProductCase: styled.div`
    width: 280px;
    height: 430px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    transition: ${(props) => props.theme.transition};
    padding-bottom: 50px;
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
  `,

  ProductImg: styled.img`
    width: 100%;
    height: 100%;
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
      font-size: 14px;
    }
    @media ${devices.sm} {
      &p {
        font-size: 12px;
      }
    }
  `,
};

export { ProductComponent };
