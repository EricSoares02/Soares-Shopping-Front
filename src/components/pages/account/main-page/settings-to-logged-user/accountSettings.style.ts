import styled from "styled-components";

const AccountSettingOptionsComponent = {
  Conteiner: styled.div`
    width: 800px;
    height: auto;
    display: block;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    & a {
      text-decoration: none;
      color: black;
    }
  `,

  Sections: styled.section`
    width: 100%;
    max-height: 100px;
    display: flex;
    padding: 40px;
    font-size: 14px;
    font-weight: 400;
    gap: 15px;
    align-items: center;
    padding:  40px;
    background-color: ${props=>props.theme.colors.white};
    border-radius: 8px;
   
  `,

  Image: styled.div`
    width: 60px;
    height: 60px;
    border-radius: 9999px;
    border: 1px solid ${props=>props.theme.colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Titles: styled.div`
    min-width: 80%;
    max-height: 100%;
    display: block;
    align-items: center;
    & span {
        font-size: 16px;  
        font-weight: 400;
    }
    & p {
      font-size: 14px;
      font-weight: 400;
      color: ${props=>props.theme.colors.shadow};
    }
  `,

  Sgv: styled.img`
    width: 25px;
    height: 25px;
    position: relative;
    left: 0;
    transform: rotate(180deg);
  `
};

export { AccountSettingOptionsComponent };
