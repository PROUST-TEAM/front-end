import React from 'react'
import styled from "styled-components";

const KeyWordContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;
  margin-top: 550px; /* 추가: 두 페이지 사이에 간격을 주기 위함 */
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
  margin-bottom: 65px;
  white-space: nowrap;
`;

const KeyButton = styled.div`
  padding: 15px;
  white-space: nowrap;
  > button{
    background-color: transparent;
    color: white;

    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 27px;

    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;

    margin-right: 15px;
    margin-left: 15px;
  }

  > button:hover {
    background-color: black;
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
          <button>향수와 젠더</button>
          <button>향의 노트</button>
          <button>향수와 젠더</button>
        </KeyButton>
        <KeyButton>
          <button>향의 노트</button>
          <button>향수와 젠더</button>
        </KeyButton>
      </KeyWordContainer>
    </>
  )
}
