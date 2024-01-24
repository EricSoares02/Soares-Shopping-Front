import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    border-top-color: blue;
  }
  100%{
    transform: rotate(360deg);
  }
`;

const LoadingCartComponent = {
    

Circle: styled.div`
  width: 700px;
  height: 600px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,

 Gray: styled.div`
  border: 7px solid;
  border-color: ${(props) => props.theme.colors.bg};
  border-radius: 9999px;
  width: 50px;
  height: 50px;
`,
//transparent #1e6fd9
 Blue: styled.div`
  border: 7px solid;
  border-color: transparent;
  border-top-color: ${(props) => props.theme.colors.yellow};
  border-radius: 9999px;
  width: 50px;
  height: 50px;
  translate: -7px -7px;
  animation: ${rotate} 3s linear infinite;
`
}

export { LoadingCartComponent }