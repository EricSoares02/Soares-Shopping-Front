import styled from "styled-components";

const ShowAccountUserComponent = {
  Conteiner: styled.section`
    width: 800px;
    max-height: 150px;
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 40px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    & img {
    border-radius: 9999px;
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
  `,

  Image: styled.div`
    width: 80px;
    height: 80px;
    border-radius: 9999px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Titles: styled.div`
    width: 400px;
    max-height: 100%;
    display: block;
    align-items: center;
    & span {
      font-size: 24px;
      font-weight: 600;
    }
    & p {
      font-size: 14px;
      font-weight: 400;
    }
  `
};

export { ShowAccountUserComponent };
