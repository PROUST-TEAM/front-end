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
export default function LocationDetail1() {
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
              <p style={linkStyle}>
                서울특별시 종로구 대학로10길 15-15 (동숭동) 해안빌딩 2층
                퍼퓸그라피
              </p>
              <p style={linkStyle}>070-4166-9121</p>
              <p style={linkStyle}>매일 12:00 ~ 20:30 (월요일 정기 휴무)</p>
            </div>
          </Info>
          <Description>
            <p>
              이리 저리 향수 매장을 다니며 눈치 보느라 하나하나 제대로 시향도
              못하고 힘들게 발품팔아 향수를 시향하던 경험이 있으셨나요? 그
              불편한 경험을 해결하기 위해 퍼퓸그라피는 누구의 눈치도 보지 않고
              편하게 시향할 수 있는 공간을 만들었습니다. 퍼퓸그라피의 오프라인
              공간에 방문하여 모든 제품들을 자유롭게 시향하고 직원들의 전문적인
              맞춤 추천서비스도 받아보세요.
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
