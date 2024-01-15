import React from 'react'
import styled from "styled-components";
import secondImage from "../../images/sec_charac.png";
import backImage from "../../images/test_back_img.png";

const PerfumeTestContainer = styled.div`
  display: flex;
  height: 830px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 190%;
`;

const BackImage = styled.div`
  position: absolute;
  > img {
    height: 663px;
    width: auto; 
  }

  z-index: 1;
`;

const Text = styled.div`
  position: absolute;
  text-align: center;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  z-index: 2;
`;

const SecondImage = styled.div`
  position: relative;
  margin-left: 50px;
  top: 40px;
  z-index: 3;

  > img {
    width: 821px; /* 이미지 너비 조절 */
    height: 462px; /* 이미지 높이 조절 */
  }
`;

const KeyButton = styled.div`
  padding: 15px;
  white-space: nowrap;
  > button{
    background-color: black;
    color: white;

    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 27px;

    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;

    margin-right: 15px;
    margin-left: 15px;
  }
`;


export default function ThirdPage() {
  return (
    <PerfumeTestContainer>
      <BackImage>
        <img src={backImage} alt="BackImg"/>
      </BackImage>
      <Text>
        <p style={{ fontSize: "50px", color: "white", fontFamily: "Pretendard_ExtraBold" }}>나와 어울리는 향은?</p>
        <p style={
          { fontSize: "35px", color: "white", fontFamily: "Pretendard_Bold", marginTop: "20px" }}>
            MBTI TEST로 나와 어울리는 향을 찾아봐
        </p>
      </Text>
      <SecondImage>
        <img src= {secondImage} alt='Second Character'/>
      </SecondImage>
      <KeyButton>
        <button style={{ marginTop: "10px",fontSize: "25px" }}>나만의 향 찾으러 가기</button>
      </KeyButton>
    </PerfumeTestContainer>
  )
}
