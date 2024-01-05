import styled from "styled-components";

const BagComponent = styled.div<{ $bagSize?: number;}>`
width: ${props=>props.$bagSize? props.$bagSize : 20}px;
height: ${props=>props.$bagSize? props.$bagSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {BagComponent}