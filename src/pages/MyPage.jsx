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
  margin-bottom: 60px;
  font-size: 70px;
  font-family: Prompt_ExtraBold;
`;

const StyledImage = styled.img`
  margin-top: 10px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StyledWord = styled.div`
  margin-left: 0;
  margin-right: 55px;
  font-size: 17px;
  font-family: Pretendard_ExtraBold;
  text-align: left;
  color: #6BFF94;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 450px;
  height: 25px;
  padding: 7px;
  margin-top: 5px;
  background-color: black;
  color: white;
  border: 2px solid white; 
  font-family: Pretendard_ExtraBold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 440px;
`;

const StyledTextButton = styled.button`
  width: 80px;
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;
`;

const StyledModifyButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-size: 10px;
`;

export default function MyPage() {
  return (
    <StyledContainer>
      <StyledImage src={topCharac} alt="Top Character" width="110" height="110" />
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
