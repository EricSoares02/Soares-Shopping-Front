import styled from "styled-components";

const SummaryComponent = {
  Conteiner: styled.section`
    width: 390px;
    height: 400px;
    display: block;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    padding: 20px;
    border-radius: 8px;
  `,
  Text: styled.div`
    width: 100%;
    height: 50px;
    font-size: 12px;
  `,
  Section: styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top: 10px;
    h1 {
      font-size: 18px;
    }
  `,

  AlignBtn: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export { SummaryComponent };
