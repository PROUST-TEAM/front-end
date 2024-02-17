import React from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";

const LocationDetailWrap = styled.div`
  margin-top: 70px;
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
  left: -215px;
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
export default function LocationDetail4() {
  return (
    <LocationDetailWrap>
      <LocationDetailContent>
        <TitleWrap>
          <Title>
            <span>SSENSE FRAGRANCE</span>
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
                서울특별시 강남구 신사동 압구정로2길 37 B1
              </p>
              <p style={linkStyle}>070-8787-3355</p>
              <p style={linkStyle}>매일 오후 12:00 ~ 20:00 (월요일 휴무)</p>
            </div>
          </Info>
          <Description>
            <p>
              쎈스프래그런스는 전 세계 다양한 향수를 편하게 경험해볼 수 있는
              니치향수 셀렉트샵입니다. <br />
              [입점브랜드] <br />- 이스뜨와 드 퍼퓸- 엠디씨아이- 더 머천트 오브
              베니스 - 니샤네- 라몬 모네갈- 아쿠아 델 엘바 - 미르코 부피니- 요지
              야마모토- 살롱 드 느바에 - 4160튜즈데이즈- 주올로지스트- 테오
              카바넬 - 케이코 메쉐리- 본투스탠드아웃- 마이익스클루시브컬렉션
            </p>
          </Description>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5151009347346!2d127.0180941753375!3d37.51935322683316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3b31358bf7b%3A0x667215f0a0e187f3!2z7I6I7Iqk7ZSE656Y6re465-w7Iqk!5e0!3m2!1sko!2skr!4v1706547261779!5m2!1sko!2skr"
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
