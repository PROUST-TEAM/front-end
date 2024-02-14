import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../images/sec_charac.png';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const StyledContent = styled.div`
  position: relative;
  text-align: center;
  color: black;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-top: -20px;
  font-size: 29px;
  font-family: Pretendard_ExtraBold;
`;

const StyledExplain = styled.p`
  color: #7D7D7D;
  margin-top: 20px;
  font-size: 24px;
  font-family: Pretendard_Bold;
  margin-bottom: 50px;
`;

const StyledImage = styled.img`
  margin-top: 100px;
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 180px;
  border: 3px solid black;
`;

const StyledWord = styled.div`
  font-size: 28px;
  font-family: Pretendard_Bold;
  margin-right: 350px;
  margin-top: 135px;
`;

const StyledButton = styled.button`
  width: 572px;
  height: 50px;
  padding: 6px;
  margin-top: 230px; 
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: Pretendard_Bold;
  font-size: 20px;
`;

const FindPassword = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/login');
    };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={Image} alt="Top Character" width="330" height="189" />
        <StyledParagraph>비밀번호 찾기</StyledParagraph>
        <StyledExplain>이메일 정보와 일치하는 비밀번호입니다.</StyledExplain>
        <StyledBorder />
        <StyledWord>비밀번호&nbsp;&nbsp;:</StyledWord>
        <StyledButton onClick={handleButtonClick}> 
          로그인 화면으로 돌아가기
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default FindPassword;
