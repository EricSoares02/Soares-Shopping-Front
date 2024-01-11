import styled from "styled-components";

const ProductImageComponent = {
  Conteiner: styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `,

  //case para mudar a imagem se houver mais de uma
  ChangeImgCase: styled.div`
    width: 90px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    align-items: center;
  `,
  ChangeImgBnt: styled.button`
    width: 50px;
    height: 55px;
    margin: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  `,
  //conteiner para alinhar as imagens
  ImgsConteiner: styled.div`
    width: 800px;
    height: auto;
    display: flex;
  `,
  ProductImgCase: styled.div`
    width: 710px;
    height: auto;
    //background-color: ${(props) => props.theme.colors.shadowcolor};
    margin-top: 12px;
    display: flex;
    justify-content: center;
  `,
  
  //case para a descriçao
  DescCase: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    & p {
      text-align: start;
      padding: 20px;
    }
  `,
  DescDefaultTitle: styled.div`
  width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  `,
  DescText: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayBlack};
    & p {
    text-align: justify;
    text-justify: auto;
    }
    
  `
};

export { ProductImageComponent };
