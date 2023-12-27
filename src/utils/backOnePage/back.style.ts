import styled from "styled-components";

const BackBtnComponent = {
  

  Conteiner: styled.div`
    width: 100%px;
    height: 30px;
    display: flex;
    margin-bottom: 10px;
  `,

  Btn: styled.button`
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  `,

};

export { BackBtnComponent };
