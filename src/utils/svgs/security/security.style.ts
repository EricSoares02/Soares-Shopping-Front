import styled from "styled-components";

const SecurityComponent = styled.div<{ $secSize?: number; }>`
width: ${props=>props.$secSize? props.$secSize : 20}px;
height: ${props=>props.$secSize? props.$secSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {SecurityComponent}