import styled from "styled-components";

const NoDataCartComponent = {
  Conteiner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Section: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Button: styled.button`
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
  `
};

export { NoDataCartComponent };
