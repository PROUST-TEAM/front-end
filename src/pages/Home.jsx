import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from '../components/MainPage/MainPage';
import Second from '../components/MainPage/SecondPage';
import Third from '../components/MainPage/ThirdPage';
import Fourth from '../components/MainPage/FourthPage';
import Fifth from '../components/MainPage/FifthPage';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  z-index: 3;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isSelected ? '#6BFF94' : 'transparent')};
  border-radius: 50%;
  margin-bottom: 10px;
  border: 1px solid white;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 색상 전환 효과 추가 */

`;

const sections = ['main', 'second', 'third', 'fourth', 'fifth'];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedIndicator, setSelectedIndicator] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // 수정된 부분: 스크롤이 어느 섹션에 속하는지를 판단할 때 0.5를 더해 반올림합니다.
      const currentSectionIndex = Math.round(scrollPosition / windowHeight + 0.2);

      setCurrentSection(currentSectionIndex);
      setSelectedIndicator(currentSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentSection(index);
    setSelectedIndicator(index);

    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavigationContainer>
        {sections.map((section, index) => (
          <Indicator
            key={index}
            isSelected={selectedIndicator === index}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </NavigationContainer>

      <HomeContainer>
        <Main />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </HomeContainer>
    </>
  );
}