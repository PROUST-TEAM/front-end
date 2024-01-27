import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import topSlide from "../../images/top_slide.png";
import secondSlide from "../../images/second_slide.png";
import thirdSlide from "../../images/third_slide.png";

// import topImage from "../../images/top_charac.png";
// import secondImage from "../../images/sec_charac.png";
// import thirdImage from "../../images/third_charac.png";

import { Link } from 'react-router-dom';

const CarouselContainer = styled.div`
  max-width: 970px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s, z-index 0.3s; /* 추가된 트랜지션 속성 */
  margin-top: 70px;
  margin-bottom: 90px;
  outline: none;
  

  img {
    width: 100%;
    height: 400px;
    z-index: ${props => (props.isCenter ? 2 : 0)};
  }

  p {
    color: white;
    font-size: 45px;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    margin: 15px 0;
  }

  button {
    white-space: nowrap;
    background-color: black;
    color: white;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 100px;
    padding: 10px 20px;
    margin-top: 15px; 
    margin: 0 auto;

    &:hover {
      background-color: transparent;
      color: #6BFF94;

      border: 2px solid #6BFF94;
    }

    display: ${props => (props.isCenter ? 'block' : 'none')};
  }

  /* 추가된 스타일 */
  z-index: ${props => (props.isCenter ? 2 : 0)};
  transform: ${props => (props.isCenter ? 'scale(1.3)' : 'scale(1)')};
  opacity: ${props => (props.isCenter ? 1 : 0.4)};
`;

export default function FifthPage(){
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerPadding: '300px',
    //initialSlide: 1, // 초기 슬라이드를 중앙 카드로 설정
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Card isCenter={currentSlide === 0}>
          <p>칼럼보러 가자</p>
          <img src={topSlide} alt="Top Character" />
          <StyledLink to="/column">
            <button>칼럼내용 보러 가기</button>
          </StyledLink>
        </Card>

        <Card isCenter={currentSlide === 1}>
          <p>시향하러 가자</p>
          <img src={thirdSlide} alt="Third Character" />
          <StyledLink to="/location">
            <button>시향 장소 찾으러 가기</button>
          </StyledLink>
        </Card>

        <Card isCenter={currentSlide === 2}>
          <p>MBTI보러 가자</p>
          <img src={secondSlide} alt="Second Character" />
          <StyledLink to="/column">
            <button>MBTI 테스트하러 가기</button>
          </StyledLink>
        </Card>
      </Slider>
    </CarouselContainer>
  )
}