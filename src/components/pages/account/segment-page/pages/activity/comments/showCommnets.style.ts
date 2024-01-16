import styled from "styled-components";

const ShowCommentByUserComponent = {
  Conteiner: styled.div`
    width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 12px; 
    & a {
      text-decoration: none;
      color: black;
    }
  `,

  CommentsCase: styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    display: block;
    background-color: ${props=>props.theme.colors.white};
    border-radius: 8px;
  `,

  TopArea: styled.section`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  CommentStarsCase: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  CommentDateCase: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: ${(props) => props.theme.colors.shadow};
    font-size: 12px;
  `,

  TitleArea: styled.section`
    width: 100%;
    height: 65px;
    display: flex;
    padding: 4px;
  `,

  BottomArea: styled.section`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
        font-size: 14px;
        color: ${(props) => props.theme.colors.blue};
    }
  `,

};

export { ShowCommentByUserComponent };
