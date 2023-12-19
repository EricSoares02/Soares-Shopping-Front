import { devices } from "@/app/global.screen";
import styled from "styled-components";

const LogoComponent = {
  Conteiner: styled.section`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media ${devices.sm} {
    display: none;
    }
  `,

  Logo: styled.a`
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.blackBlue};
    font-family: ${(props) => props.theme.fonts.segoe};
  `,
};

export { LogoComponent };
