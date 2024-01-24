//import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import topImage from "../../images/top_charac.png";
import secondImage from "../../images/sec_charac.png";
import thirdImage from "../../images/third_charac.png";
import { Link } from 'react-router-dom'; 

const FifthContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  color: white;

  position: relative;
  margin-top: 300px;
  margin-bottom: 200px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  position: relative;

  > p {
    font-size: 35px;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    margin-bottom: 10px;
  }

  > img {
    width: 457px;
    height: 453px;
    object-fit: cover;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  button {
    white-space: nowrap;
    background-color: black;
    color: white;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 25px;
    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;
    margin-top: 20px; /* 버튼과 이미지 사이 간격 조절 */
  }

  > button:hover {
    background-color: black;
    color: #6BFF94;

    border: 2px solid #6BFF94;
  }
`;


export default function FifthPage() {
  return (
    <FifthContainer>
      <Card>
        <p>칼럼보러 가자</p>
        <img src={topImage} alt="Top Character" />
        <StyledLink to="/column">
          <button>칼럼내용 보러 가기</button>
        </StyledLink>
      </Card>

      <Card>
        <p>시향하러 가자</p>
        <img src={thirdImage} alt="Third Character" />
        <StyledLink to="/location">
          <button>시향 장소 찾으러 가기</button>
        </StyledLink>
      </Card>

      <Card>
        <p>칼럼보러 가자</p>
        <img src={secondImage} alt="Second Character" />
        <StyledLink to="/column">
          <button>칼럼내용 보러 가기</button>
        </StyledLink>
      </Card>
    </FifthContainer>
    // slick slider 3d 구글 검색
  );
}
