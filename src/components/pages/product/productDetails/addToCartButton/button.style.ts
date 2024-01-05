import { devices } from "@/app/global.screen";
import styled from "styled-components";

const ButtonComponent = {

  Conteiner: styled.section`
  width:100%;
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
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transition};
    &:hover {
      background-color: ${(props) => props.theme.colors.blackBlue};
    }
    @media ${devices.lg} {
      width: 250px;
    }
  `,

  ImageBtn: styled.img`
    width: 30px;
    height: 30px;
  `,
};

export {ButtonComponent}