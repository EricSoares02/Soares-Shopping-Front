import styled from "styled-components"


const PercentageRatingComponent = {

    Conteiner: styled.section` 
    width: 100%;
    height: 150px;
    display: block;
    `,

    RatingCase: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 2px;
    `,

    Rating: styled.div`
    width: 70%;
    height: 4px;
    display: flex;
    background-color: ${props=>props.theme.colors.gray};
    border-radius: 12px;
    `,

    Percentage: styled.div<{ $percentage?: number; }>`
    width: ${props=>props.$percentage? props.$percentage : 0}%;
    height: 100%;
    display: flex;
    background-color: ${props=>props.theme.colors.grayBlack};
    border-radius: 12px;
    `

}

export {PercentageRatingComponent}