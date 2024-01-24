import styled from "styled-components";

const CartPageComponent = {
  Conteiner: styled.div`
    width: 100%;
    min-height: 900px;
    display: flex;
    justify-content: center;
  `,

  AlignConteiner: styled.div`
    width: 70vw;
    min-height: auto;
    display: flex;
    justify-content: center;
  `,
  ConteinerToProducts: styled.section`
    width: auto;
    height: 740px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  `,
};

export { CartPageComponent };
