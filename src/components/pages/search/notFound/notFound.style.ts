import styled from "styled-components"

const NotFoundComponent = {

Conteiner: styled.div`
width: 100%;
height: 900px;
display: flex;
align-items: center;
justify-content: center;
`,

AlignConteiner: styled.div`

width: ${props=>props.theme.lengths.higth};
height: auto;
color: ${props=>props.theme.colors.blue};
font-size: 23px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
`,

}

export {NotFoundComponent}