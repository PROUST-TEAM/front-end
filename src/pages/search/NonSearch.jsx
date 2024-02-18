import React, { useState, useEffect } from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import video1 from "../../images/main_ani.webm";

const SearchWrap = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 30px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 150px;
  color: white;

  font-family: "Prompt_ExtraBold", sans-serif;
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
  border-left: 2px solid #6bff94;
`;

const Circle = styled.div`
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-45%, -10%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

const Circle2 = styled.div`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6bff94;
  border-radius: 100px;

  font-family: "Pretendard_SemiBold", sans-serif;
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

  color: #f3f3f3;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: "Pretendard_SemiBold", sans-serif;
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
  text-decoration: none; // 링크에 기본 스타일 제거
`;

const SearchContainer2 = styled.div`
  display: flex;
  align-items: center;
  font-family: "Pretendard_Bold", sans-serif;
  font-size: 35px;
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);

  > p {
    width: 100%;
    color: #6bff94;
    text-align: center;
    margin-right: 17px;
    white-space: nowrap;
  }
`;

const LoaderContainer = styled.div`
  user-select: none;
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > video {
    //width: 803px;
    height: 500px;
    background-color: trnasparent;
  }
`;

const LoaderMessage = styled.div`
  font-family: Pretendard_ExtraBold;
  font-size: 40px;
  z-index: 1; //text가 이미지 위로 가게
  color: #6bff94;
  margin-top: -70px;

  > p {
    margin-top: 10px;
    font-family: Pretendard_ExtraBold;
    font-size: 30px;
    z-index: 1; //text가 이미지 위로 가게
    color: white;
  }
`;

export default function NonSearch() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    const searchData = location.state && location.state.searchData;
    console.log("Search Data:", searchData);

    setSearchText("");
  }, [location]);

  const handleSearchButtonClick = async (event) => {
    try {
      setLoading(true); // 검색 버튼 클릭 시 로딩 상태를 true로 설정

      if (searchText.trim() !== "") {
        const response = await axios.post(`${apiUrl}/ai/search`, {
          search: searchText,
        });

        console.log("서버 응답:", response.data);

        if (response.data.isSuccess && response.data.result !== null) {
          navigate("/search", { state: { searchData: response.data } });
        } else {
          window.location.href = "/nonSearch";
        }
      } else {
        window.location.href = "/nonSearch";
      }
    } catch (error) {
      if ([429, 504].includes(error.response?.status)) {
        window.location.href = "/nonSearch";
      }
    } finally {
      setLoading(false); // 검색 작업이 완료되면 로딩 상태를 false로 설정
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchButtonClick();
    }
  };

  return (
    <SearchWrap>
      {loading && (
        <LoaderContainer>
          <video autoPlay loop muted>
            <source src={video1} type="video/webm" />
          </video>
          <LoaderMessage>
            Loading 중...
            <p>조금만 기다려줘!</p>
          </LoaderMessage>
        </LoaderContainer>
      )}

      {!loading && (
        <>
          <Title>PROUST</Title>
          <Image>
            <img src={topImage} alt="Top Character" />
          </Image>
          <SearchContainer>
            <Input
              type="text"
              placeholder="향수? 나에게 다 물어봐"
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <SearchButton to="#" onClick={handleSearchButtonClick}>
              <img src={searchImage} alt="SearchImg" />
            </SearchButton>
          </SearchContainer>
          <Circle />
          <VerticalLine />
          <Circle2 />
          <SearchContainer2>
            <p>" 흠......잘 모르겠는데, 다시 검색해줄래? "</p>
          </SearchContainer2>
        </>
      )}
    </SearchWrap>
  );
}
