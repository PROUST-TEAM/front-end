import React from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";

const LocationDetailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LocationDetailContent = styled.div`
  margin-top: 90px;
`;
const Title = styled.div``;
const Div = styled.div`
  border: 2px solid #6bff94;
  border-radius: 100px;
  padding: 10px 20px;

  display: inline-block;
  > span {
    font-size: 35px;
    color: #6bff94;
  }
  font-family: Pretendard_ExtraBold;
`;
const TopImage = styled.div`
  position: relative;
  top: -120px;
  left: -140px;

  > img {
    width: 200px;
    height: 161;
  }
`;

export default function LocationDetail() {
  return (
    <LocationDetailWrap>
      <LocationDetailContent>
        <Title>
          <Div>
            <span>PERFUME GALLERY</span>
          </Div>
          <TopImage>
            <img src={topImage} alt="Top Character" />
          </TopImage>
        </Title>
      </LocationDetailContent>
    </LocationDetailWrap>
  );
}
