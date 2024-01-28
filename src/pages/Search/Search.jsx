import React, { useState } from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";
import miniTopImg from "../../images/mini_top_img.png";
import perfume from "../../images/perfume.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RootWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchWrap = styled.div`
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

export const SearchContainer2 = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6BFF94;
  border-radius: 100px 100px 100px 0px;

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 30px;
  color: #6BFF94;
  background-color: #393939;

  padding: 10px; 
  padding-left: 30px;
  width: 640px;
  height: 50px; 

  position: absolute;
  top: 155%;
  left: 50%;
  transform: translate(-50%, -50%);

  >p{
    width: 100%;
    color: #6BFF94;
    text-align: center;
    margin-right: 17px;
  }

  >img{
    width: 243px;
    position: absolute;
    top: 25%;
    left: -13%;
    transform: translate(-50%, -50%);
  }
`;

const ListWrap = styled.div`
  position: relative;
  top: 300px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
`;

const Perfume = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-width: 300px;
  height: 331px;
  margin: 10px 10px;
  > div > p {
    font-size: 35px;
    color: #282727;
    font-family: Pretendard_ExtraBold;
    margin-top: 10px;
  }

  > div > img {
    margin-top: -10px;
  }
`;
const Heart = styled.div`
  display: inline;
  > svg {
    color: #282727;
    width: 31px;
    height: 28px;
    margin-top: 30px;
    margin-right: -200px;
  }
`;

export default function Search() {
    const [isHeartFilled, setHeartFilled] = useState(false);
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
    <RootWrap>
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
            <img src={miniTopImg} alt="miniTop Character" />
            <p>"내가 너의 취향에 맞는 향수를 찾아왔어"</p>
        </SearchContainer2>
    </SearchWrap>
    <ListWrap>
        <Perfume>
            <Heart
              onClick={(event) => {
                setHeartFilled(!isHeartFilled); // 하트 채워지게
                event.preventDefault(); // Link to 방지
              }}
            >
              {/* 지금은 state가 연결되어있어서 하나 누르면 싹다 눌립니다.
                나중에 서버에서 상태 받아와서 바꾸는 코드로 변경하겠습니다 */}
              {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
            </Heart>
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
          </Perfume>
          <Perfume>
            <Heart
              onClick={(event) => {
                setHeartFilled(!isHeartFilled); // 하트 채워지게
                event.preventDefault(); // Link to 방지
              }}
            >
              {/* 지금은 state가 연결되어있어서 하나 누르면 싹다 눌립니다.
                나중에 서버에서 상태 받아와서 바꾸는 코드로 변경하겠습니다 */}
              {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
            </Heart>
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
          </Perfume>
          <Perfume>
            <Heart
              onClick={(event) => {
                setHeartFilled(!isHeartFilled); // 하트 채워지게
                event.preventDefault(); // Link to 방지
              }}
            >
              {/* 지금은 state가 연결되어있어서 하나 누르면 싹다 눌립니다.
                나중에 서버에서 상태 받아와서 바꾸는 코드로 변경하겠습니다 */}
              {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
            </Heart>
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
          </Perfume>
    </ListWrap>
    </RootWrap>
  )
}
