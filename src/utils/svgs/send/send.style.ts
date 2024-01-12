import styled from "styled-components";

const SendComponent = styled.div<{ $sendSize?: number; }>`
width: ${props=>props.$sendSize? props.$sendSize : 20}px;
height: ${props=>props.$sendSize? props.$sendSize : 20}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {SendComponent}