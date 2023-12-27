import styled from "styled-components";

const MenuBarComponent = {
  MenuBar: styled.section`
    width: 400px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 7px ${(props) => props.theme.colors.shadow};
    display: flex;
    flex-direction: column;
    & span {
      color: ${(props) => props.theme.colors.shadow};
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 40px;
    display: block;
    padding: 10px 0 0 10px;
  `,

  H2: styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grayBlack};
  `,

  OptionsConteiner: styled.section`
    width: 100%;
    height: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  OptionsCase: styled.div`
    width: 200px;
    height: 50px;
    transition: ${(props) => props.theme.transition};
    :hover {
      color: ${(props) => props.theme.colors.blue};
    }
    :before,
    ::after {
      --size: 0.3rem;
      content: "";
      position: absolute;
      right: 1rem;
      pointer-events: none;
    }

    ::before {
      border-left: var(--size) solid transparent;
      border-right: var(--size) solid transparent;
      border-bottom: var(--size) solid black;
      top: 40%;
    }

    ::after {
      border-left: var(--size) solid transparent;
      border-right: var(--size) solid transparent;
      border-top: var(--size) solid black;
      top: 55%;
    }
  `,

  Select: styled.select`
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    background-color: transparent;
    width: 200px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
  `,

};
export { MenuBarComponent };
