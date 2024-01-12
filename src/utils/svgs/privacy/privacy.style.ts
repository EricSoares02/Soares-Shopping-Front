import styled from "styled-components";

const PrivacySvgComponent = styled.div<{ $priSize?: number; }>`
width: ${props=>props.$priSize? props.$priSize : 20}px;
height: ${props=>props.$priSize? props.$priSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {PrivacySvgComponent}