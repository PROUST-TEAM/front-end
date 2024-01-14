import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import baseImage from "../../images/base_charac.png";

const PerfimeListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PerfumeListContent = styled.div`
  margin-top: 80px;
`;
const ListSpan = styled.div`
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

const Title = styled.div`
  text-align: center;
`;

export default function PerfumeList() {
  return (
    <PerfimeListWrap>
      <PerfumeListContent>
        <Title>
          <PerfumeSpan>PERFUME</PerfumeSpan>
          <br />
          <ListSpan>LIST</ListSpan>
          <BaseImage>
            <img src={baseImage} alt="Base Character" />
          </BaseImage>
        </Title>
      </PerfumeListContent>
    </PerfimeListWrap>
  );
}
