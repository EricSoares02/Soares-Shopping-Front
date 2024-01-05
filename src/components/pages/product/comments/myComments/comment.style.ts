import styled from "styled-components";

const MyCommentsComponent = {
    Conteiner: styled.section`
      width: 70%;
      height: auto;
    `,
    YouComment: styled.div`
      width: 100%;
      height: auto;
    `,
    MyCommenter: styled.section`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 10px;
    `,
  
    TopCase: styled.div`
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
    `,
    MyAccount: styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
    `,
    MyaccountImg: styled.img`
      width: 40px;
      height: 40px;
      border-radius: 9999px;
      border: solid 1px ${(props) => props.theme.colors.shadow};
      object-fit: contain;
    `,
  
    SetStars: styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
    `,
  
    CaseToAlignForm: styled.div`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
    `,
  
    Form: styled.form`
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
    InputCommenter: styled.input.attrs({ type: "text" })`
      width: 100%;
      height: 220px;
      display: flex;
      border-radius: 19px;
      border: 2px solid ${(props) => props.theme.colors.blackBlue};
      outline: 0;
    `,
    Submit: styled.input.attrs({ type: "submit" })`
      width: 100px;
      height: 40px;
      border: none;
      border-radius: 12px;
      font-weight: bolder;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
      transition: ${(props) => props.theme.transition};
      &:hover {
        background-color: ${(props) => props.theme.colors.blackBlue};
      }
    `,
  };

export {MyCommentsComponent}