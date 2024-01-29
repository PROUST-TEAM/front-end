import React from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";

const LocationDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LocationDetailContent = styled.div`
  margin-top: 90px;
  margin-bottom: 100px;
`;
const TitleWrap = styled.div`
  text-align: center;
`;

const Title = styled.div`
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
  left: -230px;
  > img {
    width: 200px;
    height: 161;
  }
`;
const DetailWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
`;

const Info = styled.div`
  display: flex;
  > div > p {
    font-size: 22px;
    color: #6bff94;
    margin-bottom: 10px;
  }
`;
const linkStyle = {
  fontSize: "20px",
  color: "#F3F3F3",
  marginBottom: "13px",
  marginLeft: "40px",
};
const Description = styled.div`
  > p {
    font-size: 20px;
    color: #f3f3f3;
    margin-bottom: 50px;
    margin-top: 45px;
    font-family: Pretendard_SemiBold;
    line-height: 1.5;
  }
  width: 649px;
`;
const Map = styled.div``;
export default function LocationDetail3() {
  return (
    <LocationDetailWrap>
      <LocationDetailContent>
        <TitleWrap>
          <Title>
            <span>PERFUME GALLERY</span>
          </Title>
          <TopImage>
            <img src={topImage} alt="Top Character" />
          </TopImage>
        </TitleWrap>

        <DetailWrap>
          <Info>
            <div style={{ fontFamily: "Pretendard_ExtraBold" }}>
              <p>주소</p>
              <p>전화번호</p>
              <p>영업시간</p>
            </div>
            <div style={{ fontFamily: "Pretendard_Bold" }}>
              <p style={linkStyle}>서울 서초구 방배로42길 35 204호</p>
              <p style={linkStyle}>02-3442-3163</p>
              <p style={linkStyle}>
                평일 10:00 ~ 18:00 (11:00 ~ 13:00 휴게시간) 주말 휴무
              </p>
            </div>
          </Info>
          <Description>
            <p>
              라틴어 단어 DIRECTO에서 따온 [디렉토] 디렉토는 관세 부가세
              해외배송비에 대한 부담없이, 현지 소비자가로 본사 제품을 직접 받을
              수 있는 ‘니치브랜드’ 쇼핑몰을 목표로 시작되었습니다. 브랜드에서
              자체적으로 메종드파팡보다 조금 더 윗단계의 향수를 다루는 장소로
              ‘자유로운 시향’의 장점을 가지고 있어서 편하게 시향 할 수는
              있습니다. 또한 브랜드에서 집까지 다이렉트로 제품이 배송되는 만큼
              안심하고 주문하실 수 있는 쇼핑 환경을 제공하고 있습니다.
            </p>
          </Description>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.74165052977816!2d126.9947095802457!3d37.5346462960255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca24afc074cfd%3A0x5a9988ce6492c8fe!2z7ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rCDsnbTtg5zsm5Drj5kgMTIzLTMy!5e0!3m2!1sko!2skr!4v1705215072058!5m2!1sko!2skr"
              width="1144"
              height="604"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
        </DetailWrap>
      </LocationDetailContent>
    </LocationDetailWrap>
  );
}
