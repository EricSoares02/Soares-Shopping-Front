import styled from "styled-components";

const BackBtnComponent = {
  

  Conteiner: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  `,
  ConteinerToAlign: styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
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
