import styled from "styled-components"

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.yellow};
  box-shadow: 0 0 14px ${(props) => props.theme.colors.shadow};
`

export {HeaderComponent}