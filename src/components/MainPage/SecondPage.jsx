import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'; 

const KeyWordContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;
  margin-top: 600px; /* 추가: 두 페이지 사이에 간격을 주기 위함 */
`;

const KeyWordTitle = styled.p`
  color: #6BFF94;
  font-family: 'Pretendard_ExtraBold', sans-serif;
  font-size: 60px;
  white-space: nowrap;
`;

const KeyWordDes = styled.p`
  color: white;
  font-family: 'Pretendard_Bold', sans-serif;
  padding-top: 20px;
  font-size: 35px;
  margin-bottom: 30px;
  white-space: nowrap;
`;

const KeyButton = styled.div`

  
  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 15px;
  white-space: nowrap;

  button {
    white-space: nowrap;
    background-color: black;
    color: white;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 25px;
    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;
    margin-top: 30px; /* 버튼과 이미지 사이 간격 조절 */
  }

  > button:hover {
    background-color: transparent;
    color: #6BFF94;

    border: 2px solid #6BFF94;
  }
`;

export default function SecondPage() {
  return (
    <>
      <KeyWordContainer>
        <KeyWordTitle>KEYWORD</KeyWordTitle>
        <KeyWordDes>향수 키워드를 통해 향수 정보를 알아봐!</KeyWordDes>
        <KeyButton>
          <StyledLink to="/column#column1">
              <button>초보 가이드</button>
          </StyledLink>
          <StyledLink to="/column#column2">
              <button>향의 노트</button>
          </StyledLink>
          <StyledLink to="/column#column3">
              <button>향의 지속력</button>
          </StyledLink>
        </KeyButton>
        <KeyButton>
          <StyledLink to="/column#column1">
              <button>향을 뿌리는 방법</button>
          </StyledLink>
          <StyledLink to="/column#column2">
              <button>향수와 젠더</button>
          </StyledLink>
        </KeyButton>
      </KeyWordContainer>
    </>
  )
}
