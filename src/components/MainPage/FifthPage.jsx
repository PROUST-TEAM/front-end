import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import topImage from "../../images/top_charac.png";
import secondImage from "../../images/sec_charac.png";
import thirdImage from "../../images/third_charac.png";
import { Link } from 'react-router-dom'; 

const FifthContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  color: white;

  position: relative;
  margin-top: 300px;
  margin-bottom: 200px;
`;

const Card = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  position: relative;
  cursor: pointer;
  z-index: ${(props) => (props.index === 2 ? 2 : 1)}; /* 중앙 카드는 다른 카드보다 앞으로 나오게 설정 */

  > p {
    font-size: ${(props) => (props.index === 2 ? '45px' : '35px')}; /* 중앙 카드는 더 큰 글자 크기로 설정 */
    font-family: 'Pretendard_ExtraBold', sans-serif;
    margin-bottom: 10px;
  }

  > img {
    width: 457px;
    height: 453px;
    object-fit: cover;
    border-radius: ${(props) => (props.index === 2 ? '16px' : '8px')}; /* 중앙 카드는 더 큰 테두리 반경 적용 */
    transform: scale(${(props) => (props.index === 2 ? 1.2 : 1)}); /* 중앙 카드는 확대되어 튀어나오는 효과 */
    transition: transform 0.5s;
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

const SwipeCarousel = () => {
  const [index, setIndex] = useState(1);
  const [props, set] = useSpring(() => ({
    x: (index - 1) * -10,
    config: { mass: 1, tension: 120, friction: 26 }, // config 값을 조절하여 애니메이션 동작을 부드럽게 조절
  }));

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (down && distance > 100) {
      const newIndex = xDir > 0 ? index - 1 : index + 1;
      set({ x: newIndex * -10, immediate: false });
      setIndex(newIndex);
      cancel();
    } else {
      set({ x: down ? mx : index * -10, immediate: down });
    }
  });

  return (
    <>
      <Card
        {...bind()}
        index={1}
        style={{
          transform: props.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <p>칼럼보러 가자</p>
        <img src={topImage} alt="Top Character" />
        <StyledLink to="/column">
          <button>칼럼내용 보러 가기</button>
        </StyledLink>
      </Card>

      <Card
        {...bind()}
        index={2}
        style={{
          transform: props.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <p>시향하러 가자</p>
        <img src={thirdImage} alt="Third Character" />
        <StyledLink to="/location">
          <button>시향 장소 찾으러 가기</button>
        </StyledLink>
      </Card>

      <Card
        {...bind()}
        index={3}
        style={{
          transform: props.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <p>칼럼보러 가자</p>
        <img src={secondImage} alt="Second Character" />
        <StyledLink to="/column">
          <button>칼럼내용 보러 가기</button>
        </StyledLink>
      </Card>
    </>
  );
};

export default function FifthPage() {
  return (
    <FifthContainer>
      <SwipeCarousel />
    </FifthContainer>
  );
}
