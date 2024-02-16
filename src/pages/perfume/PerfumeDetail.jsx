import React, { useState, useEffect } from "react";
import styled from "styled-components";
import baseImage from "../../images/base_charac.png";
import perfume from "../../images/perfume.png";
import barcode from "../../images/barcode.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Comment from "../../components/Comment";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PerfimeDetailWrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const PerfumeDetailContent = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
`;
const DetailSpan = styled.div`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt_ExtraBold;
  font-weight: 700;
`;
const PerfumeSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt_ExtraBold;
`;

const BaseImage = styled.div`
  position: relative;
  top: -200px;
  > img {
    width: 600px;
    height: 336px;
  }
`;

const Info = styled.div`
  border: 2px solid #6bff94;
  border-radius: 100px;
  padding: 10px 30px;
  display: inline-block;
  font-size: 35px;
  color: #6bff94;
  font-family: Pretendard_ExtraBold;
`;
const VerticalLine = styled.div`
  position: absolute;
  top: 762px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 171px;
  background: linear-gradient(#6bff94, #ecf5ef);
  width: 2px;
`;

const Circle = styled.div`
  position: absolute;
  top: 678px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Circle2 = styled.div`
  position: absolute;
  top: 850px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ecf5ef;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

const VerticalLine2 = styled.div`
  position: absolute;
  top: 2046px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 94px;
  background: linear-gradient(#6bff94, #f1f5f1);
  width: 2px;
`;

const Circle3 = styled.div`
  position: absolute;
  top: 2000px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Circle4 = styled.div`
  position: absolute;
  top: 2090px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f5f1;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
const Detail = styled.div`
  margin-top: -200px;
`;
const Receipt = styled.div`
  margin-top: 200px;
  display: grid;
  justify-content: center;
`;
const ReceiptTop = styled.div`
  background-color: #fefdfc;
  width: 526px;
  border-radius: 17.77px 17.77px 35.54px 35.54px;
`;

const Heart = styled.div`
  display: inline;
  > svg {
    color: #282727;
    width: 31px;
    height: 28px;
    margin-top: 25px;
    padding: 0px;
    margin-right: -430px;
  }
`;
const Explanation = styled.div`
  margin: 25px 50px 40px 50px;
  font-family: Pretendard_Medium;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.63);
  text-align: left;
  line-height: 1.4;
`;
const ReceiptBottom = styled.div`
  background-color: #fefdfc;
  width: 526px;
  border-radius: 35.54px 35.54px 17.77px 17.77px;
`;

const lineStyle = {
  height: "2px",
  backgroundColor: "#D9D9D9",
  margin: "25px 30px 20px 30px",
};
const lineStyle2 = {
  height: "2px",
  width: "1148px",
  backgroundColor: "rgba(107, 255, 148, 0.5)",
  margin: "80px 0 40px 0",
};
const textStyle = {
  fontFamily: "Pretendard_SemiBold",
  fontSize: "18px",
  color: "#7D7D7D",
  marginBottom: "5px",
};
const titleStyle = {
  fontFamily: "Pretendard_ExtraBold",
  fontSize: "50px",
  color: "#282727",
  margin: "0px 0 20px 0",
  display: "inline-block",
};
export default function PerfumeDetail() {
  const [isHeartFilled, setHeartFilled] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [response, setResponse] = useState([]);
  const location = useLocation();
  const perfumeName = location.state.name;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/${perfumeName}/getPerfumes`,
          {
            params: {
              Name: perfumeName,
            },
            headers: {
              Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
            },
          }
        );

        console.log("향수 디테일:", response.data.result);
        setResponse(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, [perfumeName]);

  const onClickHeart = async (perfume) => {
    console.log(perfume.name);
    axios
      .patch(`${apiUrl}/${perfume.name}/likePerfumes`, {
        params: {
          Name: perfume.name,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      })
      .then((response) => {
        // 서버 응답 확인
        console.log("향수 찜: ", response.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <PerfimeDetailWrap>
      <PerfumeDetailContent>
        <PerfumeSpan>PERFUME</PerfumeSpan>
        <br />
        <DetailSpan>DETAIL</DetailSpan>
        <BaseImage>
          <img src={baseImage} alt="Base Character" />
        </BaseImage>
        <Detail>
          <Info>INFO</Info>
          <Circle />
          <VerticalLine />
          <Circle2 />
          <Receipt>
            {response &&
              response.perfume_contentsData &&
              response.perfume_contentsData.map((perfume, index) => (
                <ReceiptTop>
                  <Heart
                    onClick={(event) => {
                      console.log(response);
                      onClickHeart(perfume); // 하트 클릭 시 동작할 함수
                      console.log(perfume.name);
                      event.preventDefault();
                    }}
                  >
                    {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                  </Heart>
                  <br />
                  <p style={titleStyle}>{perfume.name}</p>
                  <p style={textStyle}>{perfume.nameKor}</p>
                  <p style={textStyle}>
                    #신비로운 바닐라 #스파이스 #달달함 #우디
                  </p>
                  <div style={lineStyle} />
                  <img
                    src={perfume.imageUrl}
                    alt={perfume.name}
                    style={{ width: "260px", height: "338px" }}
                  />
                  <Explanation>
                    <span>{perfume.description}</span>
                  </Explanation>
                </ReceiptTop>
                // <Perfume>
                //   <Heart
                //     onClick={(event) => {
                //       console.log(response);
                //       onClickHeart(perfume); // 하트 클릭 시 동작할 함수
                //       console.log(perfume.name);
                //       event.preventDefault();
                //     }}
                //   >
                //     {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                //   </Heart>
                //   <div>
                //     <img
                //       src={perfume.imageUrl}
                //       alt={perfume.name}
                //       style={{ width: "200px", height: "250px" }}
                //     />
                //   </div>
                //   <div>
                //     <p>{perfume.name}</p>
                //   </div>
                // </Perfume>
              ))}
            {/* <ReceiptTop>
              <Heart
                onClick={(event) => {
                  console.log(response);
                  onClickHeart(perfume); // 하트 클릭 시 동작할 함수
                  console.log(perfume.name);
                  event.preventDefault();
                }}
              >
                {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
              </Heart>
              <br />
              <p style={titleStyle}>Eau Duelle</p>
              <p style={textStyle}>오 듀엘르</p>
              <p style={textStyle}>#신비로운 바닐라 #스파이스 #달달함 #우디</p>
              <div style={lineStyle} />
              <img
                src={perfume}
                alt="Base Character"
                style={{ width: "260px", height: "338px" }}
              />
              <Explanation>
                <span>
                  오 듀엘르는 바닐라 깍지가 고아, 카르타고, 베니스, 바빌론 등의
                  향신료 항로를 따라 가는, 상상 속의 여행을 표현한 향입니다.전
                  설적인 기항지를 거치면서 향에 새로운 맛들이 베어들게 됩니다.
                  시간과 국경을 초월하는 여행을 통해 마다가스카르의 부르봉
                  바닐라는 빛과 그림자를 표현합니다.
                </span>
              </Explanation>
            </ReceiptTop> */}
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
          </Receipt>
          <div style={lineStyle2} />
          <Info>COMMENT</Info>
          <Circle3 />
          <VerticalLine2 />
          <Circle4 />
          <Comment />
        </Detail>
      </PerfumeDetailContent>
    </PerfimeDetailWrap>
  );
}
