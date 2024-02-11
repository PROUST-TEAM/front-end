import React from "react";
import styled from "styled-components";
import entp from "../../images/mbti/entp.png";
import perfume from "../../images/perfume.png";
import { Link } from "react-router-dom";
import datas from "./json/results.json";

const MbtiResultWrap = styled.div``;
const MbtiResultContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
`;
const ResultLeft = styled.div`
  // flex: 70%;
  // margin-left: 50px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    > p {
      color: #fefdfc;
      font-family: Pretendard_Bold;
      font-size: 30px;
      width: 554px;
      line-height: 1.2;
    }
  }
`;
const ResultRight = styled.div``;
const Center = styled.div``;
const Explanation = styled.div`
  margin: 25px 50px 40px 50px;
  font-family: Pretendard_SemiBold;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  line-height: 1.4;
  text-align: center;
  width: 500px;
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
const titleStyle = {
  fontFamily: "Pretendard_ExtraBold",
  fontSize: "25px",
  color: "#6BFF94",
  margin: "0px 0 10px 0",
  display: "inline-block",
};
const textStyle = {
  fontFamily: "Pretendard_Medium",
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.7)",
  marginBottom: "5px",
};

const Circle2 = styled.div`
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 506px;
  left: 50%;
  transform: translate(800%, -50%);
`;

const StyledHr = styled.hr`
  border: 0;
  height: 2px;
  width: 120px;
  background: #6bff94;
`;

export default function MbtiResult() {
  return (
    <MbtiResultWrap>
      <MbtiResultContent>
        <ResultLeft>
          <div>
            <p>
              너의 MBTI는 <span style={{ color: "#6BFF94" }}>ENTP</span>
              <br />
              너와 어울리는 향수를 알려줄게
            </p>
          </div>
          <div style={{}}>
            <img
              src={entp}
              alt="entp"
              style={{ width: "681px", height: "298px" }}
            />
          </div>

          <Link to="/mbtiMain">
            <StartButton>
              <div>MBTI TEST 다시하기</div>
            </StartButton>
          </Link>
        </ResultLeft>
        <Center>
          <StyledHr />
          <Circle2 />
        </Center>
        <ResultRight>
          <div>
            <p style={titleStyle}>Eau Duelle</p>
            <p style={textStyle}>오 듀엘르</p>
            <p style={textStyle}>#신비로운 바닐라 #스파이시 달달한 우디</p>
            <img
              src={perfume}
              alt="Base Character"
              style={{ width: "260px", height: "338px", marginTop: "30px" }}
            />
            <Explanation>
              <span>
                우디하고 스파이시함이 도드라지는 향수로 활달적이면 재기발랄한
                ENFJ에게 잘 어울리는 향이다.닐라의 산뜻한 느낌과 우디의 묵직함이
                즐겁고 밝지만 진중함을 가지고 있는 ENFJ들의 느낌과 매우 비슷한
                이미지를 가지고 있다. 그 밖에도 ENFJ에게 어울리는 향수들 몇개를
                아래 추천한다.
              </span>
            </Explanation>
          </div>
        </ResultRight>
      </MbtiResultContent>
    </MbtiResultWrap>
  );
}
