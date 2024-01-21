import React from "react";
import styled from "styled-components";
import middleImg from "../../images/sec_charac.png";
import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import statusImg from "../../images/Shape.png";
import numberImg from "../../images/Number0.png";

const MbtiTestWrap = styled.div``;
const MbtiTestTopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MbtiTestTopContent = styled.div``;

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

const MbtiTestBottomWrap = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Button = styled.div`
  background-color: white;
  border-radius: 100px;
  padding: 10px 20px 10px 20px;
`;
const Bar = styled.div`
  display: flex;
`;
const Status = styled.div`
  position: absolute;
  top: 734px;
  left: 50%;
  transform: translate(-1050%, -50%);
`;

const Circle2 = styled.div`
  background-color: #fefdfc;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`;

const StyledHr = styled.hr`
  border: 0;
  height: 4px;
  width: 550px;
  background: #f3f3f3;
`;

const ImagesContainer = styled.div``;
const StatusImg = styled.img`
  top: 0%;
  left: 50%;
  transform: translate(-13%, -20%);
`;

const NumberImg = styled.img`
  position: absolute;
  //   background-color: red;
  width: 8px;
  top: 10px;
  left: 50%;
  transform: translate(-98%, -50%); /* 이미지의 중심을 화면의 중심에 위치시킴 */
`;

export default function MbtiTest() {
  return (
    <MbtiTestWrap>
      <MbtiTestTopWrap>
        <MbtiTestTopContent>
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
        </MbtiTestTopContent>
      </MbtiTestTopWrap>
      <MbtiTestBottomWrap>
        <Button style={{ marginRight: "150px" }}>
          <GoArrowLeft /> 이전
        </Button>
        <Bar>
          <Status>
            <ImagesContainer>
              <StatusImg src={statusImg} alt="Status" />
              <NumberImg src={numberImg} alt="Status" />
            </ImagesContainer>

            <Circle2 />
          </Status>
          <StyledHr />
        </Bar>
        <Link to="/mbtiResult">
          <Button style={{ marginLeft: "150px" }}>
            <GoArrowRight /> 다음
          </Button>
        </Link>
      </MbtiTestBottomWrap>
    </MbtiTestWrap>
  );
}
