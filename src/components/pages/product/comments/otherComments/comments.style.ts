import styled from "styled-components";

const OthersCommentsComponent = {
  Conteiner: styled.div`
    width: 100%;
    height: auto;
  `,
  CommentsConteiner: styled.div`
    width: 100%;
    height: auto;
    padding: 8px;
    scroll-behavior: auto;
  `,
  CommentsCase: styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    display: block;
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
    color: ${props=> props.theme.colors.shadow};
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
  `,

  LikeButton: styled.button`
  width: 90px;
  height: 33px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${props=> props.theme.colors.shadow};
  border-radius: 15px;
  color: ${props=> props.theme.colors.shadow};
  transition: ${props=> props.theme.transition};
  cursor: pointer;
  &:hover{
    border: 1px solid ${props=> props.theme.colors.blue};
    color: ${(props) => props.theme.colors.blue};
  }
  `,

ReportButton: styled.button`
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
cursor: pointer;
`
};

export { OthersCommentsComponent };
