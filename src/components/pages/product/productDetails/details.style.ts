import { devices } from "@/app/global.screen";
import styled from "styled-components";

const DetailsComponent = {
  Conteiner: styled.section`
    width: 400px;
    height: 800px;
    display: flex;
    flex-direction: column;
    border: solid 1px ${(props) => props.theme.colors.shadowcolor};
    border-radius: 10px;
    padding: 20px 0 0 15px;
    & i {
      color: ${(props) => props.theme.colors.shadowcolor};
      text-decoration: line-through;
      font-family: ${(props) => props.theme.fontStyle};
    }
    & span {
      font-weight: 100;
      font-size: 50px;
      font-family: ${(props) => props.theme.fontStyle};
      color: ${(props) => props.theme.colors.blackBlue};
    }
    @media ${devices.lg} {
      width: 400px;
    }
    @media ${devices.sm} {
      width: 100%;
    }
  `,

  ProductName: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    & h1 {
      font-size: 18px;
    }
  `,

  TextConteiner: styled.section`
    width: 100%;
    height: 256px;
    padding-top: 8px;
    p {
      font-size: 14px;
    }
  `,
  Text: styled.h2`
    color: #00a650;
    font-size: 46px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  `,

  //options case
  OptionsConteiner: styled.section`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    h3 {
      font-size: 16px;
    }
  `,

  SelectOptions: styled.select`
    width: 40%;
    height: 40px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: flex;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
  `,

  Options: styled.option`
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    height: 40px;
  `,

  BtnConteiner: styled.div`
    width: 100%;
    height: auto;
    position: relative;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    gap: 4px;
  `,
};
export { DetailsComponent };
