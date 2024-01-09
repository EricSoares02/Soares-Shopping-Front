import styled from "styled-components";

const LoginFormComponent = {

  Conteiner: styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    width: 1200px;
    max-height: 600px;
    border-radius: 29px;
    background-color: ${(props) => props.theme.colors.white};
  `,

  Text: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    height: 100px;
    & h1 {
      color: ${(props) => props.theme.colors.white};
      font-size: 22px;
      font-weight: 600;
      text-decoration: underline;
    }
  `,

  Form: styled.form`
    width: 600px;
    height: 550px;
    background-color: ${(props) => props.theme.colors.white};
    //box-shadow: 0 0 5px ${(props) => props.theme.colors.shadowcolor};
    border-radius: 29px;
  `,

  SubmitCase: styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  `,
  Submit: styled.button.attrs({ type: "submit" })`
    border: none;
    border-radius: 12px;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 65px;
    gap: 14px;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transition};
    &:hover {
      background-color: ${(props) => props.theme.colors.blackBlue};
    }
  `,
  ChangePassword: styled.p`
    font-size: 12px;
    font-size: 600;
    color: #b627e5;
  `,

  InputConteiner: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 30px;
  `,
  InputCase: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    & p {
      font-size: 14px;
    }
  `,
  LabelCase: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    padding-left: 60px;
  `,
  Label: styled.label`
    font-size: 16px;
    font-weight: 600;
  `,

  EmailInput: styled.input.attrs({ type: "email" })`
    width: 80%;
    height: 65px;
    background-color: ${(props) => props.theme.colors.bg};
    border: none;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding-left: 30px;
    outline: none;
  `,
  PasswordInput: styled.input.attrs({ type: "password" })`
    width: 80%;
    height: 65px;
    background-color: ${(props) => props.theme.colors.bg};
    border: none;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding-left: 30px;
    outline: none;
  `,

  // right side

  RightSide: styled.section`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 600px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 75px 29px 29px 0;
    position: relative;
    right: 0;
  `,
  Accounts: styled.div`
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 12px;
    color: ${(props) => props.theme.colors.white};
  `,
};

export { LoginFormComponent };
