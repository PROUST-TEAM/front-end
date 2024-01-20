import React, { useState } from 'react';
import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";
import { Link } from 'react-router-dom';

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 30px;
  margin-bottom: 50px;
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

const Image = styled.div`
  > img {
    width: 803px;
    height: 452px;
  }
  z-index: 0; //이미지가 Title 위로 가도록
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateY(40%);
  height: 150px;
  border-left: 2px solid #6BFF94 ; 
`;

const Circle = styled.div`
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-45%, -10%);
  background-color: #6BFF94;
  border-radius: 50%;
  width: 15px; 
  height: 15px;
`;

const Circle2 = styled.div`
  position: absolute;
  top: 140%;
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
  top: 100%;
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

const SearchContainer2 = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;

  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);

  >p{
    width: 100%;
    color: #6BFF94;
    text-align: center;
    margin-right: 17px;
  }
`;


export default function NonSearch() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // 검색어가 비어있지 않은 경우에만 링크로 이동
    if (searchText.trim() !== '') {
      // 검색 결과 페이지로 이동
      // 예시로 "/search" 경로를 사용했습니다.
      // 실제 사용하고자 하는 경로로 변경해주세요.
      window.location.href = `/search`;
    } else {
      // 검색어가 비어있는 경우 다른 페이지로 이동하거나, 필요에 따라 아무 작업도 수행하지 않을 수 있습니다.
      // 여기서는 예시로 "/other" 경로로 이동하도록 설정했습니다.
      window.location.href = '/nonSearch';
    }
  };
  return (
    <SearchWrap>
        <Title>
          PROUST
        </Title>
        <Image>
          <img src={topImage} alt="Top Character" />
        </Image>
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
        <Circle/>
        <VerticalLine/>
        <Circle2/>
        <SearchContainer2>
            <p>" 흠......잘 모르겠는데, 다시 검색해줄래? "</p>
        </SearchContainer2>
    </SearchWrap> 
  )
}
