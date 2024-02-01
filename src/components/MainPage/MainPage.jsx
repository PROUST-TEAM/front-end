import React, { useState } from 'react';
import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";
import { Link } from 'react-scroll';

const MainContainer = styled.article`
  position: sticky;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 30px;
  margin-bottom: 50px;
`;

const Image = styled.div`
  > img {
    width: 803px;
    height: 452px;
  }
  z-index: 0; //이미지가 Title 위로 가도록
`;

const Title= styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 150px; 
  color: white;

  font-family: 'Prompt_ExtraBold', sans-serif;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -135%);
  white-space: nowrap;
`;

const SubTitle = styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 35px; 
  color: white;
  white-space: pre-line; // 줄바꿈 활성화

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 295%);
  white-space: nowrap;
`;

const ColoredText = styled.span`
  color: #6BFF94 ; 
  white-space: nowrap;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateY(40%);
  height: 150px;
  border-left: 2px solid #6BFF94 ; 
`;

const Circle = styled.div`
  position: absolute;
  top: 145%;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6BFF94;
  border-radius: 50%;
  width: 15px; 
  height: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6BFF94;
  border-radius: 100px;

  font-family: 'Pretendard_SemiBold', sans-serif;
  font-size: 25px;
  color: white;
  background-color: black;

  padding: 10px; 
  padding-left: 30px;
  width: 732px;
  height: 40px;

  position: absolute;
  top: 156%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #F3F3F3 ; 
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: 'Pretendard_SemiBold', sans-serif;
  background-color: black;
  outline: none;
  border: none;
  color: white;
  width: 680px;
`;

export const SearchButton = styled(Link)`
  > img {
    width: 46px;
    height: 46px;
  }
 
  margin-top: 5px;
  padding-right: 20px;
  text-decoration: none;  // 링크에 기본 스타일 제거
`;



export default function MainPage() {
  // 검색어가 있는 경우 vs 없는 경우 나눠서 구현
  // API 연결 후에 변경될 예정
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchText.trim() !== '') {
      window.location.href = `/search`;
    } else {
      window.location.href = '/nonSearch';
    }
  };

  return (
    <>
      <MainContainer>
        <Title>
          PROUST
        </Title>
        <Image>
          <img src={topImage} alt="Top Character" />
        </Image>
        <SubTitle>
        <ColoredText>몰랐던 향수 정보</ColoredText> 찾는데 낭비하는 시간,
          <p>프루스트가 아껴줄게!</p>
        </SubTitle>
        <VerticalLine/>
        <Circle/>
        <SearchContainer>
        <Input
            type="text"
            placeholder="향수? 나에게 다 물어봐"
            value={searchText}
            onChange={handleInputChange}
          />
          <SearchButton to="#" onClick={handleSearchButtonClick}>
            <img src={searchImage} alt="SearchImg" />
          </SearchButton>
          </SearchContainer>
      </MainContainer>
    </>
  )
}
