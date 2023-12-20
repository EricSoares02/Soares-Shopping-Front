import styled from "styled-components";

const SliderComponent = {
  Conteiner: styled.div`
   width: 100%;
   height: 400px;
   display: flex;
   justify-content: center;
  `,

  AlingBox: styled.div`
  max-width: 1512px;
  height: 100%;
  display: flex;
  justify-content: center;
  `,

  SliderConteiner: styled.div`
  width: 100%;
  height: 100%;
  `,

  Slider: styled.section`
    width: 100%;
    height: 100%;
    background-color: blue;
  `,

  ImgSliderConteiner: styled.div`
    max-width: 100%;
    height: 100%;
  `,

  Img: styled.img`
    width: 100%;
    height: 100%;
  `
};

export { SliderComponent };
