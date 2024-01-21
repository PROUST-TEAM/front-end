import React from "react";
import styled from "styled-components";
import middleImg from "../../images/sec_charac.png";

const MbtiTestWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
`;
const MbtiTestContent = styled.div``;
const Title = styled.div`
  color: #6bff94;
  font-family: Prompt_Black;
  font-size: 100px;
`;

const Info = styled.div`
  > p {
    color: #ffffff;
    font-family: Pretendard_Bold;
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const StartButton = styled.div`
  border: 2px solid #fefdfc;
  border-radius: 100px;
  padding: 15px 100px;
  margin-top: 80px;
  display: inline-block;
  font-size: 30px;
  color: #fefdfc;
  font-family: Pretendard_ExtraBold;
  &:hover {
    background-color: black;
    color: #6bff94;
    border: 2px solid #6bff94;
  }
`;

export default function MbtiTest() {
  return (
    <MbtiTestWrap>
      <MbtiTestContent>
        <img
          src={middleImg}
          alt="Middle Character"
          style={{ width: "430px", height: "250px" }}
        />
        <Title>MBTI TEST</Title>
        <Info>
          <p>나와 어울리는 향은 무엇일까?</p>
          <p>
            <span style={{ color: "#6BFF94" }}>MBTI TEST</span>로 어울리는 향을
            찾아봐
          </p>
        </Info>
        <StartButton>
          <div>MBTI TEST 시작하기</div>
        </StartButton>
      </MbtiTestContent>
    </MbtiTestWrap>
  );
}
