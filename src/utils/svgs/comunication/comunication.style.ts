import styled from "styled-components";

const ComunicationSvgComponent = styled.div<{ $comSize?: number; }>`
width: ${props=>props.$comSize? props.$comSize : 20}px;
height: ${props=>props.$comSize? props.$comSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {ComunicationSvgComponent}