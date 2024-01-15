import React from 'react'
import styled from "styled-components";
import nlogImg from "../../images/nlog_user_img.png";

const FourthContainer = styled.div`
  display: flex;
  height: 830px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  position: absolute;
  top: 300%;
`;

const Title = styled.div`
  color: white;

  font-family: 'Pretendard_ExtraBold', sans-serif;
  font-size: 40px;
  white-space: nowrap;
`;

const ColoredText = styled.span`
  color: #6BFF94 ; 
  white-space: nowrap;
`;

const BestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  > img{
    margin-top: 20px;
    height: 650px;
    width: auto;
  }
`;

const KeyButton = styled.div`
  white-space: nowrap;
  > button{
    background-color: black;
    color: #6BFF94;

    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 25px;

    border: 2px solid #6BFF94;
    border-radius: 100px;
    padding: 15px 40px;
    margin-top: 40px;
  }
`;



export default function FourthPage() {
  return (
    <FourthContainer>
        <Title>
            <ColoredText>회원가입</ColoredText>하고 향수 추천받아봐
        </Title>
        <BestContainer>
            {/* 비로그인/로그인 구분
                비로그인 - 이미지로 처리
                로그인 - 이미지 및 API 받아서 처리*/}
            <img src= {nlogImg} alt='Second Character'/>
        </BestContainer>
        <KeyButton>
            <button>나만의 향 찾으러 가기</button>
        </KeyButton>
    </FourthContainer>
  )
}
