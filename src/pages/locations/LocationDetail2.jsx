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
export default function LocationDetail2() {
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
              <p style={linkStyle}>서울특별시 강남구 압구정로18길 31 5층</p>
              <p style={linkStyle}>070-4158-1205</p>
              <p style={linkStyle}>
                매일 오전 12:00 ~ 오후 20:00 (월,일요일 정기 휴무)
              </p>
            </div>
          </Info>
          <Description>
            <p>
              2013년에 문을 연 메종 드 파팡의 가로수길 매장은 최고의 향수만을
              엄선하여 소개하는 국내 유일의 독립 퍼퓸 전문 매장입니다. 메종 드
              파팡의 퍼퓸 셀렉션은 다양한 향조, 노트, 스토리를 가진 수백여
              가지의 아름답고 독특한 향수로 구성되어 있으며, 이와 함께 향에 대한
              이해와 전문적인 지식을 바탕으로 본인의 향을 찾고자 하는 분들에게
              최적의 가이드를 제공하고자 합니다.
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
