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
`;
const Map = styled.div``;
export default function LocationDetail() {
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
              <p style={linkStyle}>서울특별시 용산구 이태원로 187 1층 2호</p>
              <p style={linkStyle}>02-793-3439</p>
              <p style={linkStyle}>일~목 10:30 ~ 22:00</p>
            </div>
          </Info>
          <Description>
            <p>
              이번 단독 플래그쉽 스토어 오픈은 퍼퓸 갤러리의 마스터피스와 같은
              퍼퓸 브랜드를
              <br />
              더욱 가까이 선보이는 장소로 시대를 초월한 클래식한 영국의 니치
              퍼퓸부터 프랑스
              <br />
              황실의 메종 퍼퓸, 모던 빈티지한 파리 니치 퍼퓸까지 그동안 소수의
              콜렉터들에서만
              <br />
              향유되고 다양한 30여개의 니치 퍼퓸 브랜드들 뿐 아니라 지속적으로
              새로운 니치
              <br />
              퍼퓸을 발굴해 첫선을 보이는 익스클루시브한 매장으로 다가갈
              계획이다.
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