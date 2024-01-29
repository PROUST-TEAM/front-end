import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import topImage from "../../images/top_charac.png";
import gallery from "../../images/perfume_gallery.png";
import gallery2 from "../../images/perfume_gallery2.png";

const LocationWrap = styled.div`
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
`;
const GalleryWrap2 = styled.div`
  margin-top: -50px;
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
                    }}
                  >
                    리퀴드 이메지네르, 아틀리에 데조, 아무아쥬, 몽탈, 만세라,
                    카잘, <br />
                    마쥬리, 랑세, 클라이브 크리스찬 외 해외 향수 브랜드 다수
                    입점
                  </p>
                </div>
                <img src={gallery} alt="Top Character" />
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
                    }}
                  >
                    리퀴드 이메지네르, 아틀리에 데조, 아무아쥬, 몽탈, 만세라,
                    카잘, <br />
                    마쥬리, 랑세, 클라이브 크리스찬 외 해외 향수 브랜드 다수
                    입점
                  </p>
                </div>

                <img src={gallery2} alt="Top Character" />
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
                    }}
                  >
                    리퀴드 이메지네르, 아틀리에 데조, 아무아쥬, 몽탈, 만세라,
                    카잘, <br />
                    마쥬리, 랑세, 클라이브 크리스찬 외 해외 향수 브랜드 다수
                    입점
                  </p>
                </div>
                <img src={gallery} alt="Top Character" />
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
                    }}
                  >
                    리퀴드 이메지네르, 아틀리에 데조, 아무아쥬, 몽탈, 만세라,
                    카잘, <br />
                    마쥬리, 랑세, 클라이브 크리스찬 외 해외 향수 브랜드 다수
                    입점
                  </p>
                </div>
                <img src={gallery2} alt="Top Character" />
              </Gallery2>
            </Link>
          </GalleryWrap2>
        </LocationList>
      </LocationContent>
    </LocationWrap>
  );
}
