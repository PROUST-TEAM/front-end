import React from "react";
import styled from "styled-components";

import enfj from "../../images/mbti/enfj.png";
import enfp from "../../images/mbti/enfp.png";
import entj from "../../images/mbti/entj.png";
import entp from "../../images/mbti/entp.png";
import esfj from "../../images/mbti/esfj.png";
import esfp from "../../images/mbti/esfp.png";
import estj from "../../images/mbti/estj.png";
import estp from "../../images/mbti/estp.png";
import infj from "../../images/mbti/infj.png";
import infp from "../../images/mbti/infp.png";
import intj from "../../images/mbti/intj.png";
import intp from "../../images/mbti/intp.png";
import isfj from "../../images/mbti/isfj.png";
import isfp from "../../images/mbti/isfp.png";
import istp from "../../images/mbti/istp.png";
import istj from "../../images/mbti/istj.png";

import Penfj from "../../images/mbti/enfj_p.png";
import Penfp from "../../images/mbti/enfp_p.png";
import Pentj from "../../images/mbti/entj_p.png";
import Pentp from "../../images/mbti/entp_p.png";
import Pesfj from "../../images/mbti/esfj_p.png";
import Pesfp from "../../images/mbti/esfp_p.png";
import Pestj from "../../images/mbti/estj_p.png";
import Pestp from "../../images/mbti/estp_p.png";
import Pinfj from "../../images/mbti/infj_p.png";
import Pinfp from "../../images/mbti/infp_p.png";
import Pintj from "../../images/mbti/intj_p.png";
import Pintp from "../../images/mbti/intp_p.png";
import Pisfj from "../../images/mbti/isfj_p.png";
import Pisfp from "../../images/mbti/isfp_p.png";
import Pistp from "../../images/mbti/istp_p.png";
import Pistj from "../../images/mbti/istj_p.png";

import { Link, useLocation } from "react-router-dom";
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

const ResultRight = styled.div`
> img{
  object-fit: cover;
`;
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
  const location = useLocation();
  const mbtiList = location.state && location.state.mbtiList;

  console.log('mbti총 결과',mbtiList);

  let IorE = 
    mbtiList.find(function(data){return data.name === 'I'}).count>
    mbtiList.find(function(data){return data.name === 'E'}).count?'I':'E' ;

  let SorN = 
    mbtiList.find(function(data){return data.name === 'S'}).count>
    mbtiList.find(function(data){return data.name === 'N'}).count?'S':'N' ;

  let ForT = 
    mbtiList.find(function(data){return data.name === 'F'}).count>
    mbtiList.find(function(data){return data.name === 'T'}).count?'F':'T' ;

  let PorJ = 
    mbtiList.find(function(data){return data.name === 'P'}).count>
    mbtiList.find(function(data){return data.name === 'J'}).count?'P':'J' ;

  let mbti = IorE + SorN + ForT + PorJ;
  console.log(mbti);

  const mbtiImages = {
    'ENFJ': { img: enfj, pImg: Penfj },
    'ENFP': { img: enfp, pImg: Penfp },
    'ENTJ': { img: entj, pImg: Pentj },
    'ENTP': { img: entp, pImg: Pentp },
    'ESFJ': { img: esfj, pImg: Pesfj },
    'ESFP': { img: esfp, pImg: Pesfp },
    'ESTJ': { img: estj, pImg: Pestj },
    'ESTP': { img: estp, pImg: Pestp },
    'INFJ': { img: infj, pImg: Pinfj },
    'INFP': { img: infp, pImg: Pinfp },
    'INTJ': { img: intj, pImg: Pintj },
    'INTP': { img: intp, pImg: Pintp },
    'ISFJ': { img: isfj, pImg: Pisfj },
    'ISFP': { img: isfp, pImg: Pisfp },
    'ISTJ': { img: istj, pImg: Pistj },
    'ISTP': { img: istp, pImg: Pistp },
  };

  const selectedImages = mbtiImages[mbti];

  return (
    <MbtiResultWrap>
      <MbtiResultContent>
        <ResultLeft>
          <div>
            <p>
              너의 MBTI는 <span style={{ color: "#6BFF94" }}>{mbti}</span>
              <br />
              너와 어울리는 향수를 알려줄게
            </p>
          </div>
          <div style={{}}>
            <img
              src={selectedImages.img}
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
            <p style={titleStyle}>{datas[mbti].eperfume}</p>
            <p style={textStyle}>{datas[mbti].kperfume}</p>
            <p style={textStyle}>{datas[mbti].keyword}</p>
            <img
              src={selectedImages.pImg}
              alt="Base Character"
              style={{ height: "338px", marginTop: "30px" }}
            />
            <Explanation>
              <span>
              {datas[mbti].description}
              </span>
            </Explanation>
          </div>
        </ResultRight>
      </MbtiResultContent>
    </MbtiResultWrap>
  );
}
