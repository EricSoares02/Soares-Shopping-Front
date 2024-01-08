import styled from "styled-components";

const FooterComponent = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterElementsComponent = {
  ConteinerToAlign: styled.div`
    width: 70vw;
    height: 100%;
    display: block;
    justify-content: center;
    align-items: center;
  `,

  TopSide: styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  BotSide: styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    transform:translateY(-50px);
  `,

  Sections: styled.section`
    width: 300px;
    height: auto;
    display: block;
    justify-content: center;
    text-align: center;
  `,

  TitleArea: styled.div`
    width: 100%;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  TextArea: styled.div`
    width: 100%;
    height: 150px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    color: ${(props) => props.theme.colors.shadow};
    & a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.blue};
    }
  `,
};

export { FooterComponent, FooterElementsComponent };
