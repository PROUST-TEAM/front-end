import React, { useState } from 'react'
import styled from "styled-components";
import topImage from "../images/top_charac.png"

const StyledContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-top: 50px;
  margin-right: -50px;
  font-size: 25px;
  font-family: Pretendard_ExtraBold;
`;

const StyledImage = styled.img`
  margin-top: 50px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`

const StyledWord = styled.div`
  margin-right: 430px;
  font-size: 17px;
  font-family: Pretendard_ExtraBold;
  margin-top: 15px;
`

const StyledInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 7px;
  margin-top: 5px;
  margin-right: 80px;
  border: none;
  background-color: #f0f0f0; 
  color: #333;
  border-radius: 5px;
`;

const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: -340px;
  margin-top: 20px;
`;

const StyledSwitch = styled.div`
  position: relative;
  width: 2em;
  height: 1em;
  border: max(2px, 0.1em) solid black;
  border-radius: 1.25em;
  overflow: hidden;
  cursor: pointer;
  background-color: black;
`;

const StyledSlider = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: white;
  transition: left 250ms linear;
  left: ${({ isClicked }) => (isClicked ? '50%' : '0')};
`;

const StyledSwitchLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledSwitchSpan = styled.span`
  font-size: 13px;
  margin-left: 10px;
  font-family: Pretendard_ExtraBold;
`;

const StyledButton = styled.button`
  width: 420px;
  height: 40px;
  padding: 7px;
  margin-top: 30px; 
  margin-bottom: 0px; 
  margin-right: 80px; 
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Pretendard_ExtraBold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: -70px;
  margin-bottom: 100px;
`;

const StyledTextButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 10px;
  color: black;

  &:not(:last-child) {
    margin-right: -20px;
    margin-top: 0px;
  }
`;

export default function Login() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSwitchClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
    <StyledContainer>
      <StyledParagraph>
        <p>
          로그인하고 더 편하게<br />
          프루스트를 이용해 보세요.
        </p>
        </StyledParagraph>
        <StyledImage src={topImage} alt="Top Character" width="300" height="168" />
    </StyledContainer>
    <StyledContent>
      <StyledWord>
        <p>아이디</p>
      </StyledWord>
      <StyledInput type="text" placeholder="아이디를 입력하세요" />
      <StyledWord>
        <p>비밀번호</p>
      </StyledWord>
      <StyledInput type="text" placeholder="비밀번호를 입력하세요" />
      <StyledSwitchContainer>
          <StyledSwitchLabel>
            <StyledSwitch onClick={handleSwitchClick}>
              <StyledSlider isClicked={isClicked} />
            </StyledSwitch>
            <StyledSwitchSpan>비밀번호 기억하기</StyledSwitchSpan>
          </StyledSwitchLabel>
        </StyledSwitchContainer>
        <StyledButton>로그인</StyledButton>
        <StyledButtonContainer>
          <StyledTextButton>아이디 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton>비밀번호 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton>회원가입 하기</StyledTextButton>
        </StyledButtonContainer>
      </StyledContent>
    </>
  );
}

