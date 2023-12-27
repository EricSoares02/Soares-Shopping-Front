import styled from "styled-components";

const SearchComponent = {
  Conteiner: styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
  `,

  AlignConteiner: styled.div`
    width: 70vw;
    height: auto;
    color: ${(props) => props.theme.colors.gray};
    display: flex;
  `,
 
};
export { SearchComponent };
