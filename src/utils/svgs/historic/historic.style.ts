import styled from "styled-components";

const HistoricSvgComponent = styled.div<{ $hisSize?: number; }>`
width: ${props=>props.$hisSize? props.$hisSize : 20}px;
height: ${props=>props.$hisSize? props.$hisSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {HistoricSvgComponent}