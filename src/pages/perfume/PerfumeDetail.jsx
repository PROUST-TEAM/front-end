import React from "react";
import styled from "styled-components";
import baseImage from "../../images/base_charac.png";
import perfume from "../../images/perfume.png";

const PerfimeDetailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const PerfumeDetailContent = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
`;
const DetailSpan = styled.div`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt;
  font-weight: 700;
`;
const PerfumeSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt;
`;

const BaseImage = styled.div`
  position: relative;
  top: -200px;
  > img {
    width: 600px;
    height: 336px;
  }
`;

const Info = styled.div`
  border: 2px solid #6bff94;
  border-radius: 100px;
  padding: 10px 30px;
  margin: 0 15px;
  display: inline-block;
  font-size: 35px;
  color: #6bff94;
  font-family: Pretendard_ExtraBold;
`;
const VerticalLine = styled.div`
  position: absolute;
  top: 742px;
  left: 50%;
  transform: translate(-45%, -50%);
  height: 171px;
  border-left: 2px solid #6bff94;
`;

const Circle = styled.div`
  position: absolute;
  top: 653px;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Circle2 = styled.div`
  position: absolute;
  top: 830px;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Detail = styled.div`
  margin-top: -200px;
`;

export default function PerfumeDetail() {
  return (
    <PerfimeDetailWrap>
      <PerfumeDetailContent>
        <PerfumeSpan>PERFUME</PerfumeSpan>
        <br />
        <DetailSpan>DETAIL</DetailSpan>
        <BaseImage>
          <img src={baseImage} alt="Base Character" />
        </BaseImage>
        <Detail>
          <Info>INFO</Info>
          <Circle />
          <VerticalLine />
          <Circle2 />
        </Detail>
      </PerfumeDetailContent>
    </PerfimeDetailWrap>
  );
}
