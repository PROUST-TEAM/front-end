import React from "react";
import styled from "styled-components";
import middleImg from "../../images/sec_charac.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MbtiTestWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
`;
const MbtiTestContent = styled.div`
  margin-top: 60px;
  user-select: none;
`;
const Title = styled.div`
  color: #6bff94;
  font-family: Prompt_Black;
  font-size: 100px;
`;

const Info = styled.div`
  > p {
    user-select: none;
    color: #ffffff;
    font-family: Pretendard_Bold;
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const StartButton = styled.div`
user-select: none;
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

export default function Mbti() {
const navigate = useNavigate();
const location = useLocation();
const mbtiList = location.state ? location.state.mbtiList : null;

const handleNavigate = () => {
    navigate('/mbtiResult', { state: { mbtiList } });
};
  
console.log('dd',mbtiList);

return (
    <MbtiTestWrap>
      <MbtiTestContent>
        <img
          src={middleImg}
          alt="Middle Character"
          style={{ width: "430px", height: "250px" }}
        />
        <Title>TEST FINISH</Title>
        <Info>
          <p style={{marginTop: "10px"}}>
            <span style={{ color: "#6BFF94" }}>MBTI TEST</span>가 끝났어!
          </p>
          <p>내 성향과 맞는 향수가 궁금하지 않아?</p>
        </Info>
        {/* <Link to={{ pathname: "/mbtiResult", state: { mbtiList } }}> */}
          <StartButton onClick={handleNavigate}>
            <div>테스트 결과 보러가기</div>
          </StartButton>
        {/* </Link> */}
      </MbtiTestContent>
    </MbtiTestWrap>
  );
}
