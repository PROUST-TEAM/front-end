import React from 'react'
import styled from 'styled-components';
import bigTop from "../images/first_big.png";
import bigSecond from "../images/second_big.png";
import bigThird from "../images/third_big.png";

const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center; // 텍스트 가운데 정렬
    margin-top: 20px;
`;

const MainTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center; // 텍스트 가운데 정렬
    font-size: 60px; 
    color: white;

    font-family: 'Prompt_ExtraBold', sans-serif;
    white-space: nowrap;

    >p {
        text-align: center; 
        color: #6BFF94;
        font-family: 'Pretendard_ExtraBold', sans-serif;
        font-size: 35px; 
        white-space: nowrap;
        margin-top: 5px;
    }
`;

const CharacterList = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
`;

const Character1 = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 40px;
    white-space: nowrap;

    >p {
        color: white;
        font-family: 'Pretendard_SemiBold', sans-serif;
        font-size: 20px;
        line-height: 1.5;
    }

    >img{
        width: 288px;
        height: 461px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
`;

const Name = styled.div`
    width: fit-content;
    white-space: nowrap;
    background-color: transparent;
    color: #6BFF94;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 25px; 
    border: 2px solid #6BFF94;;
    border-radius: 100px;
    padding: 15px 40px;
    margin: auto;
`;

const StyledSpan = styled.span`
    color: white ; 
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 20px; 
    white-space: nowrap;
`;

export default function Character() {
  return (
    <CharacterContainer>
        <MainTitle>
            PROUST
            <p>우리에 대해서 알려줄게!</p>
        </MainTitle>
        <CharacterList>
            <Character1>
                <Name>
                    TOP
                </Name>
                <img src={bigTop} alt="bigTopImg" />
                <p>" 나는 향의 가장 윗부분을 "<br/> 담당하는 <StyledSpan>맏형 TOP</StyledSpan></p>
            </Character1>
            <Character1>
                <Name>
                    MIDDLE
                </Name>
                <img src={bigSecond} alt="bigSecondImg" />
                <p>" 나는 향의 중간부분을 "<br/> 담당하는 <StyledSpan>둘째 MIDDLE</StyledSpan></p>
            </Character1>
            <Character1>
                <Name>
                    BASE
                </Name>
                <img src={bigThird} alt="bigThirdImg" />
                <p>" 나는 향의 가장 아랫부분을 "<br/> 담당하는 <StyledSpan>막내 BASE</StyledSpan></p>
            </Character1>
        </CharacterList>
    </CharacterContainer>
  )
}
