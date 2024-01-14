import React from "react";
import styled from "styled-components";
import topImage from "../images/top_charac.png";

const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LocationContent = styled.div`
  text-align: center;
  margin-top: 80px;
`;
const PerfumeSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt;
`;

const LocationSpan = styled.span`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt;
  font-weight: 700;
`;

const TopImage = styled.div`
  position: relative;
  top: -220px;
  > img {
    width: 600px;
    height: 336px;
  }
`;

export default function Location() {
  return (
    <LocationWrap>
      <LocationContent>
        <PerfumeSpan>PERFUME</PerfumeSpan>
        <br />
        <LocationSpan>LOCATION</LocationSpan>
        <TopImage>
          <img src={topImage} alt="Top Character" />
        </TopImage>
      </LocationContent>
    </LocationWrap>
  );
}
