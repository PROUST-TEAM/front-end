import React from "react";
import styled from "styled-components";
import middleImg from "../../images/sec_charac.png";
import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const MbtiTestWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
`;
const MbtiTestContent = styled.div``;

const Question = styled.div`
  display: inline-block;
  > p {
    color: #fefdfc;
    font-family: Pretendard_Bold;
    font-size: 30px;
    width: 554px;
    margin-top: -30px;
    margin-bottom: 40px;
    line-height: 1.5;
  }
`;
const Options = styled.div`
  text-align: start;
  > div {
    background-color: #ffffff;
    color: #282727;
    font-size: 24px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
`;
const Option = styled.div`
  padding: 20px 20px 20px 20px;
  > p {
    color: #282727;
    font-size: 24px;
    font-family: Pretendard_Medium;

    > span {
      color: #282727;
      font-size: 30px;
      font-family: Pretendard_Black;
      margin-right: 20px;
    }
  }
`;

const Bottom = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.div`
  background-color: white;
  border-radius: 100px;
  padding: 10px 20px 10px 20px;
`;
const Bar = styled.div`
  color: white;
`;
const Circle = styled.div`
  //   position: absolute;
  //   top: 678px;
  //   left: 50%;
  //   transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Circle2 = styled.div`
  //   position: absolute;
  //   top: 678px;
  //   left: 50%;
  //transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const StyledHr = styled.hr`
  border: 0; /* 없애기 */
  height: 2px; /* 선 높이 */
  background: linear-gradient(to right, #6bff94, #0072ff); /* 그라데이션 색상 */
`;
export default function MbtiTest() {
  return (
    <MbtiTestWrap>
      <MbtiTestContent>
        <div>
          <img
            src={middleImg}
            alt="Middle Character"
            style={{ width: "430px", height: "250px" }}
          />
        </div>

        <Question>
          <p>
            어떤향수를 사야할지 망설이는 찰나 매장 직원이 내게 다가온다 이때
            나는?
          </p>
        </Question>
        <Options>
          <Option>
            <p>
              <span>A</span>
              향수 찾기는 어렵지만 직원이 말거는건 부담스러워 자리를 피한다.
            </p>
          </Option>
          <Option>
            <p>
              <span>B</span>
              마침 향수 고르기 어려웠는데 기뻐하며 직원에게 말을건다.
            </p>
          </Option>
        </Options>
        <Bottom>
          <Button>
            <GoArrowLeft /> 이전
          </Button>
          <Bar>
            <Circle />
            <StyledHr />
            <Circle2 />
          </Bar>
          <Button>
            <GoArrowRight /> 다음
          </Button>
        </Bottom>
      </MbtiTestContent>
    </MbtiTestWrap>
  );
}
