import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../images/sec_charac.png';
import clearImage from '../images/clear_Icon.png'
import arrowImage from '../images/arrow-left.png'

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

const StyledArrow = styled.img`
  cursor: pointer;
  position: absolute;
  top: 75px;
  left: -7px;
`;

const StyledImage = styled.img`
  margin-top: 10px;
`;

const StyledWord = styled.div`
  font-size: 23px;
  font-family: Pretendard_Bold;
  margin-right: 450px;
  margin-bottom: 7px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 560px;
  height: 48px;
  padding: 6px;
  margin-top: 5px;
  margin-bottom: 30px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 6px;
  font-family: Pretendard_Light;
  font-size: 16px;
  text-indent: 20px;
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 15px;
  top: 37.5%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const StyledSendButton = styled.button`
  width: 120px;
  height: 32px;
  padding: 7px;
  margin-top: 7px;
  margin-left: 445px;
  margin-bottom: 4px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: Pretendard_Bold;
  font-size: 14px;
`;

const StyledNextButton = styled.button`
  width: 572px;
  height: 50px;
  padding: 6px;
  margin-top: 50px; 
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
      <StyledArrow src={arrowImage}  onClick={handleBackToLogin} alt="Arrow Image" width="32" height="32" ></StyledArrow>
        <StyledImage src={Image} alt="Top Character" width="330" height="189" />
        <StyledParagraph>비밀번호 찾기</StyledParagraph>
        <StyledExplain>비밀번호는 가입시 입력된 이메일로 찾으실 수 있습니다.</StyledExplain>
        <StyledWord>
          <p>이름</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요."
            value={userid}
            onChange={handleInputChange}
          />
          <StyledClearButton visible={userid !== ''} 
            onClick = {handleClearButtonClick}> <img src={clearImage} 
          alt="Clear" style={{ width: '32px', height: '32px' }} />
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
            <StyledInput
                type="text"
                placeholder="이메일을 입력하세요."
            />
        </StyledInputContainer>
        <StyledSendButton onClick={handleSendClick}>
          인증메일 보내기
        </StyledSendButton>
        <StyledInputContainer>
              <StyledInput
              type="text"
              placeholder="인증번호를 입력하세요."
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
