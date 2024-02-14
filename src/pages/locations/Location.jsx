import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import topImage from "../../images/top_charac.png";
import location1 from "../../images/location/perfumegraphy.png";
import location2 from "../../images/location/masion.jpg";
import location3 from "../../images/location/directo.jpg";
import location4 from "../../images/location/ssenfragrance.jpg";

const LocationWrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LocationContent = styled.div`
  margin-top: 80px;
`;
const PerfumeSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt_ExtraBold;
`;

const Title = styled.div`
  text-align: center;
`;

const LocationSpan = styled.span`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt_ExtraBold;
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

const LocationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard_ExtraBold;
`;
const GalleryWrap1 = styled.div`
  margin-top: -270px;
  img {
    width: 468px;
    height: 313px;
  }
`;
const GalleryWrap2 = styled.div`
  margin-top: -50px;
  img {
    width: 468px;
    height: 313px;
  }
`;
const Gallery1 = styled.div`
  margin-bottom: 100px;
  margin-right: 70px;
`;
const Gallery2 = styled.div`
  margin-bottom: 100px;
`;
const linkStyle = {
  textDecoration: "none", // 밑줄 제거
  color: "inherit", // 기본 색상 사용
};
export default function Location() {
  return (
    <LocationWrap>
      <LocationContent>
        <Title>
          <PerfumeSpan>PERFUME</PerfumeSpan>
          <br />
          <LocationSpan>LOCATION</LocationSpan>
          <TopImage>
            <img src={topImage} alt="Top Character" />
          </TopImage>
        </Title>

        <LocationList>
          <GalleryWrap1>
            <Link to="/locationDetail1" style={linkStyle}>
              <Gallery1>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    종로구
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    PERFUME GRAPHY
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (퍼퓸 그라피)
                    </span>
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#F3F3F3",
                      fontFamily: "Pretendard_Medium",
                      marginBottom: "22px",
                      marginTop: "10px",
                      width: "350px",
                    }}
                  >
                    톰포드, 메종 프란시스 커졍, 랑방, 디올, 세르주루텐, 크리드
                    어벤투스, 킬리안, 지미추, 안나수이 외 해외 향수 브랜드 다수
                    입점
                  </p>
                </div>
                <img src={location1} alt="location" />
              </Gallery1>
            </Link>
            <Link to="/locationdetail2" style={linkStyle}>
              <Gallery1>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    강남구
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    MASION DE PARFUM
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (메종 드 파팡)
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#F3F3F3",
                      fontFamily: "Pretendard_Medium",
                      marginBottom: "22px",
                      marginTop: "10px",
                      width: "350px",
                    }}
                  >
                    힐리, 아크로, 아스티에 드 빌라드, 에따 리브르 도랑주, 레 방
                    게르부아, 레 퍼퓸 드 로진느, 더 아이 앤드 더 노즈, 실밴느
                    드라꾸뜨 등 입점
                  </p>
                </div>

                <img src={location2} alt="location" />
              </Gallery1>
            </Link>
          </GalleryWrap1>

          <GalleryWrap2>
            <Link to="/locationdetail3" style={linkStyle}>
              <Gallery2>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    서초구
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    DIRECTO
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (디렉토)
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#F3F3F3",
                      fontFamily: "Pretendard_Medium",
                      marginBottom: "22px",
                      marginTop: "10px",
                      width: "350px",
                    }}
                  >
                    닐라베르메르, 스테이트오브마인드, TDC, 올팩티브스튜디오,
                    인스티튜드 트레비앙, 리퀴드 이매지너리, 블러디우드, 블루보틀
                    등 입점
                  </p>
                </div>
                <img src={location3} alt="location" />
              </Gallery2>
            </Link>
            <Link to="/locationdetail4" style={linkStyle}>
              <Gallery2>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    강남구
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    SSENSE FRAGRANCE
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (쎈스 프레그런스)
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#F3F3F3",
                      fontFamily: "Pretendard_Medium",
                      marginBottom: "22px",
                      marginTop: "10px",
                      width: "400px",
                    }}
                  >
                    이스뜨와 드 퍼퓸, 4160 튜즈데이즈, 아이젠버그, 미르코
                    부피니, 아쿠아 델 알바, 메종 사이브라이트, 라몬 모네갈, 요지
                    야마모토, 키에린 뉴욕 등 입점
                  </p>
                </div>
                <img src={location4} alt="location" />
              </Gallery2>
            </Link>
          </GalleryWrap2>
        </LocationList>
      </LocationContent>
    </LocationWrap>
  );
}
