import styled from "styled-components";

const UserComponent = styled.div<{ $starSize?: number; }>`
width: ${props=>props.$starSize? props.$starSize : 30}px;
height: ${props=>props.$starSize? props.$starSize : 30}px;
display: flex;
align-items: center;
& svg{
    width: 100%;
    height: 100%;
}
`
export {UserComponent}