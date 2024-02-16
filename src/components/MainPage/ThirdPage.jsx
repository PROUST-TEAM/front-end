import React from "react";
import styled from "styled-components";
import secondImage from "../../images/sec_charac.png";
import backImage from "../../images/test_back_img.png";
import { Link } from "react-router-dom";

const PerfumeTestContainer = styled.div`
  user-select: none;
  display: flex;
  height: 830px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  margin-top: 400px;
`;

const BackImage = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;

  > img {
    width: 1900px;
    height: 663px;
  }

  z-index: 1;
`;

const Text = styled.div`
  position: absolute;
  text-align: center;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  z-index: 1;
`;

const SecondImage = styled.div`
  position: relative;
  top: 50px;
  z-index: 1;

  > img {
    width: 802px;
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  z-index: 1;

  > button {
    white-space: nowrap;
    background-color: black;
    color: white;
    font-family: "Pretendard_ExtraBold", sans-serif;
    font-size: 25px;
    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;
  }

  > button:hover {
    background-color: black;
    color: #6bff94;

    border: 2px solid #6bff94;
  }
`;

export default function ThirdPage() {
  return (
    <PerfumeTestContainer>
      <BackImage>
        <img src={backImage} alt="BackImg" />
      </BackImage>
      <Text>
        <p
          style={{
            fontSize: "50px",
            color: "white",
            fontFamily: "Pretendard_ExtraBold",
          }}
        >
          나와 어울리는 향은?
        </p>
        <p
          style={{
            fontSize: "35px",
            color: "white",
            fontFamily: "Pretendard_Bold",
            marginTop: "20px",
          }}
        >
          MBTI TEST로 나와 어울리는 향을 찾아봐
        </p>
      </Text>
      <SecondImage>
        <img src={secondImage} alt="Second Character" />
      </SecondImage>
      <StyledLink to="/mbtiMain">
        <button>나만의 향 찾으러 가기</button>
      </StyledLink>
    </PerfumeTestContainer>
  );
}
