import styled from "styled-components";


const InformationSegmentComponent = {

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

}

export {InformationSegmentComponent}