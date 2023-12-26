import styled from "styled-components"

const CategoriesComponent = {

Conteiner: styled.section`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
`,

CategoriesConteiner: styled.div`
  width: 70vw;
  height: 100%;
  margin: 20px;
`,

CategoryCase: styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadow};
  transition: ${(props) => props.theme.transition};
  background-color: ${(props) => props.theme.colors.bg};
  &:hover {
    width: 155px;
    height: 155px;
  }
`,

CategoryImg: styled.img`
  width: 48px;
  height: 48px;
`,

 CategoryTitle: styled.p`
  font-weight: 400;
  font-size: 14px;
`
}


export {CategoriesComponent}