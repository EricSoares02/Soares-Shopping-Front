import styled from "styled-components";

const LogoutComponent = {
  Conteiner: styled.section`
    width: 60%;
    height: 40px;
    display: flex;
    justify-content: end;
  `,

  LogoutButton: styled.button`
    border: none;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 100%;
    background-color: transparent;
    color: #D90D1E;
    transition: ${(props) => props.theme.transition};
    &:hover {
        color: #B21236;
    }
  `,

  LogoutConfirm: styled.div``,
};

export { LogoutComponent };
