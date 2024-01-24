import React, { useState } from 'react';
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
  margin-top: -10px;
  font-size: 25px;
  font-family: Pretendard_ExtraBold;
`;

const StyledExplain = styled.p`
  color: #999;
  margin-top: 13px;
  font-size: 20px;
  font-family: Pretendard_ExtraBold;
  margin-bottom: 50px;
`;

const StyledArrow = styled.span`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 0px;
`;

const StyledImage = styled.img`
  margin-top: 10px;
`;

const StyledWord = styled.div`
  font-size: 17px;
  font-family: Pretendard_ExtraBold;
  margin-top: 15px;
  margin-right: 350px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 7px;
  margin-top: 5px;
  margin-right: 5px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 5px;
  font-family: Pretendard_ExtraBold;
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const StyledSendButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 7px;
  margin-top: 20px;
  margin-left: 310px;
  margin-bottom: 1px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: Pretendard_ExtraBold;
  font-size: 12px;
`;

const StyledNextButton = styled.button`
  width: 415px;
  height: 40px;
  padding: 7px;
  margin-top: 50px; 
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: Pretendard_ExtraBold;
  font-size: 15px;
`;


const FindPassword = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [userid, setUserid] = useState('');

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setUserid(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUserid('');
  };

  const handleSendClick = () => {
    console.log('Send verification email logic');
  };

  const handleNextClick = () => {
    console.log('Next email logic');
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledArrow onClick={handleBackToLogin}>&#10229;</StyledArrow>
        <StyledImage src={Image} alt="Top Character" width="300" height="168" />
        <StyledParagraph>비밀번호 찾기</StyledParagraph>
        <StyledExplain>비밀번호는 가입시 입력된 이메일로 찾으실 수 있습니다.</StyledExplain>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ transform: 'translateY(3.5px)' }}>
              <circle cx="12" cy="12" r="10" fill="#f0f0f0" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
            <StyledInput
                type="text"
                placeholder="이메일을 입력하세요"
            />
        </StyledInputContainer>
        <StyledSendButton onClick={handleSendClick}>
          인증메일 보내기
        </StyledSendButton>
        <StyledInputContainer>
              <StyledInput
              type="text"
              placeholder="인증번호를 입력하세요"
            />
        </StyledInputContainer>
        <StyledNextButton onClick={handleNextClick}>
          다음
        </StyledNextButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default FindPassword;
