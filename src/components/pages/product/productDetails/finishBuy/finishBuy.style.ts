import { devices } from "@/app/global.screen";
import styled from "styled-components";

const FinishBuyComponent = {

  Conteiner: styled.section`
    width: 100%;
    height: auto;
  `,

  Btn: styled.button`
    border: none;
    border-radius: 12px;
    font-weight: bolder;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 65px;
    gap: 14px;
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.blue};
    transition: ${(props) => props.theme.transition};
    &:hover {
      background-color: #66b1f2;
      color: ${(props) => props.theme.colors.white};
    }
    @media ${devices.lg} {
      width: 250px;
    }
  `,
};

export { FinishBuyComponent };
