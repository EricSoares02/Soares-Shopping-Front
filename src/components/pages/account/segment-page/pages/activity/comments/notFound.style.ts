import styled from "styled-components"


const NotFoundCommentByUserComponent = {

    Conteiner: styled.div`
    width: 100%;
    height: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props=>props.theme.colors.blue};
    & a {
      font-size: 20px;
      text-decoration: none;
      color: black;
    }
  `

}


export { NotFoundCommentByUserComponent }