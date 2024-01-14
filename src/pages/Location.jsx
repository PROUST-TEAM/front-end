import React from "react";
import styled from "styled-components";
import topImage from "../images/top_charac.png";
import gallery from "../images/perfume_gallery.png";
import gallery2 from "../images/perfume_gallery2.png";

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
  font-family: Prompt;
`;

const Title = styled.div`
  text-align: center;
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

const LocationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard_ExtraBold;
`;
const GalleryWrap1 = styled.div`
  margin-top: -150px;
`;
const GalleryWrap2 = styled.div`
  margin-top: -100px;
`;
const Gallery1 = styled.div`
  margin-bottom: 100px;
  margin-right: 70px;
`;
const Gallery2 = styled.div`
  margin-bottom: 100px;
  margin-right: 70px;
`;
const Gallery3 = styled.div`
  margin-bottom: 100px;
`;
const Gallery4 = styled.div`
  margin-bottom: 100px;
`;
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
            <Gallery1>
              <Text>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    이태원
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    Perfume Gallery
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (퍼퓸 갤러리)
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
              </Text>

              <img src={gallery} alt="Top Character" />
            </Gallery1>
            <Gallery2>
              <Text>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    이태원
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    Perfume Gallery
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (퍼퓸 갤러리)
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
              </Text>

              <img src={gallery2} alt="Top Character" />
            </Gallery2>
          </GalleryWrap1>

          <GalleryWrap2>
            <Gallery3>
              <Text>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    이태원
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    Perfume Gallery
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (퍼퓸 갤러리)
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
              </Text>

              <img src={gallery} alt="Top Character" />
            </Gallery3>
            <Gallery4>
              <Text>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#EDEDED",
                      marginBottom: "5px",
                    }}
                  >
                    이태원
                  </p>
                  <p style={{ fontSize: "25px", color: "#6BFF94" }}>
                    Perfume Gallery
                    <span style={{ fontSize: "25px", color: "#EDEDED" }}>
                      (퍼퓸 갤러리)
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
              </Text>

              <img src={gallery2} alt="Top Character" />
            </Gallery4>
          </GalleryWrap2>
        </LocationList>
      </LocationContent>
    </LocationWrap>
  );
}
