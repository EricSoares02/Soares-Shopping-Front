import styled from "styled-components";

const ReviewsCommentsComponent = {
  Conteiner: styled.div`
    width: 100%;
    height: auto;
  `,

  Text: styled.div`
    width: 100%;
    height: 50px;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ReviewCase: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;
    // flex-direction: column;
    padding: 10px;
    color: ${(props) => props.theme.colors.blue};
    font-weight: 400;
    font-size: 65px;
  `,

  StarCase: styled.div`
    width: auto;
    height: 50px;
    display: block;
    color: ${(props) => props.theme.colors.shadow};
    font-weight: 200;
    font-size: 14px;
  `,

  Stars: styled.div`
  width: auto;
  height: 20px;
  display: flex;
  `
};

export { ReviewsCommentsComponent };
