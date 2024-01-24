import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import topImage from '../images/top_charac.png'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-top: 50px;
  margin-right: -40px;
  margin-left: 55px;
  font-size: 25px;
  font-family: Pretendard_ExtraBold;
`;

const StyledImage = styled.img`
  margin-top: 50px;
  margin-left: -15px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const StyledWord = styled.div`
margin-right: 350px;
font-size: 17px;
font-family: Pretendard_ExtraBold;
margin-top: 15px;
text-align: left;
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 7px;
  margin-top: 5px;
  margin-right: 30px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 5px;
  font-family: Pretendard_ExtraBold;
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: -270px;
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
  margin-right: 30px;
`;

const StyledSwitchSpan = styled.span`
  font-size: 13px;
  margin-left: 10px;
  font-family: Pretendard_ExtraBold;
`;

const StyledButton = styled.button`
  width: 415px;
  height: 40px;
  padding: 7px;
  margin-top: 30px;
  margin-bottom: 0px;
  margin-right: 30px;
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
  margin-left: -20px;
  margin-bottom: 10px;
`;

const StyledTextButton = styled(Link)`
  padding: 10px 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 10px;
  color: black;
  font-family: Pretendard_ExtraBold;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: -20px;
    margin-top: 0px;
  }
`;

const StyledFooter = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: -30px;
  display: flex;  
`;

const StyledText = styled.span`
  font-size: 12px;
  color: black;
  font-family: Pretendard_ExtraBold;
  margin: 0 5px; 
`;

export default function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [userid, setUserid] = useState('');

  const handleSwitchClick = () => {
    setIsClicked(!isClicked);
  };

  const handleInputChange = (event) => {
    setUserid(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUserid('');
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
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="아이디를 입력하세요"
            value={userid}
            onChange={handleInputChange}
          />
          <StyledClearButton visible={userid !== ''} onClick={handleClearButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ transform: 'translateY(3.5px)' }}
          >
          <circle cx="12" cy="12" r="10" fill="#f0f0f0" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledInput type="text" placeholder="비밀번호를 입력하세요"/>
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
          <StyledTextButton to="/find-id">아이디 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton to="/find-pw">비밀번호 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton to="/join">회원가입 하기</StyledTextButton>
          </StyledButtonContainer>
        <StyledFooter>
          <StyledText>──────────────</StyledText>
          <StyledText>또는</StyledText>
          <StyledText>──────────────</StyledText>
        </StyledFooter>
      </StyledContent>
    </>
  );
}
