import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import topCharac from '../images/bg_top.png';
import openImage from '../images/Login-Icons.png';
import closeImage from '../images/EyeClosed.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const StyledParagraph = styled.p`
  color: white;
  margin-top: 20px;
  margin-bottom: 90px;
  font-size: 85px;
  font-family: Prompt_ExtraBold;
`;

const StyledImage = styled.img`
  margin-top: 60px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const StyledWord = styled.div`
  margin-left: -5px;
  margin-right: 75px;
  font-size: 26px;
  font-family: Pretendard_ExtraBold;
  text-align: left;
  color: #6BFF94;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 600px;
  height: 35px;
  padding: 7px;
  margin-top: 5px;
  background-color: black;
  color: white;
  border: 3px solid white; 
  font-family: Pretendard_Bold;
  font-size: 20px;
  text-indent: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 632px;
`;

const StyledTextButton = styled.button`
  width: 80px;
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
`;

const StyledModifyButton = styled.button`
  width: 80px;
  height: 33px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
`;

export default function MyPage() {
  return (
    <StyledContainer>
      <StyledImage src={topCharac} alt="Top Character" width="120" height="120" />
      <StyledParagraph>MY PAGE</StyledParagraph>

      <StyledRow>
        <StyledWord>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledWord>
        <StyledInputContainer>
          <StyledInput id="name-modify" type="text" placeholder="이름" />
        </StyledInputContainer>
      </StyledRow>

      <StyledRow>
        <StyledWord>Password</StyledWord>
        <StyledInputContainer>
          <StyledInput id="pw-modify" type="text" placeholder="비밀번호" />
        </StyledInputContainer>
      </StyledRow>

      <StyledRow>
        <StyledWord>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledWord>
        <StyledInputContainer>
          <StyledInput id="mail-modify" type="text" placeholder="이메일" />
        </StyledInputContainer>
      </StyledRow>
      
      <StyledButtonContainer>
      <StyledTextButton>탈퇴하기</StyledTextButton>
      <StyledModifyButton>수정하기</StyledModifyButton>
    </StyledButtonContainer>
  </StyledContainer>
  );
}
