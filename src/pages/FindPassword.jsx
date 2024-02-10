import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../images/sec_charac.png';
import clearImage from '../images/clear_Icon.png';
import arrowImage from '../images/arrow-left.png';
import pointImage from '../images/point.png';

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
  position: relative;
`;

const StyledTimer = styled.div`
  position: absolute;
  left: -58px;
  top: 50%;
  transform: translateY(-50%);
  font-family: Pretendard_Bold;
  font-size: 18px;
  color: #7C0000;
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
  const [userid, setUserid] = useState('');
  const [usermail, setUsermail] = useState('');
  const [isNexted, setIsNexted] = useState(false);
  const [authenticationcode, setAuthenticationode] = useState('');
  const [isAuthenticationEmailSent, setIsAuthenticationEmailSent] = useState(false);
  const [timer, setTimer] = useState(300);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (isAuthenticationEmailSent) {
      startTimer();
    } else {
      resetTimer();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isAuthenticationEmailSent]);

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setUserid(event.target.value);
    handleInputValidation("userid-input", event.target.value);
  };

  const handleMailChange = (event) => {
    setUsermail(event.target.value);
    handleInputValidation("usermail-input", event.target.value);
  };

  const handleClearButtonClick = () => {
    setUserid('');
    handleInputValidation("userid-input", '');
  };

  const handleSendClick = () => {
    console.log('인증 이메일 전송 로직');
    setIsAuthenticationEmailSent(true);
  };

  const sendButtonText = isAuthenticationEmailSent ? "인증메일 재발급" : "인증메일 보내기";

  const handleNextClick = () => {
    handleInputValidation("userid-input", userid);
    handleInputValidation("usermail-input", usermail);
    handleInputValidation("authenticationCode-input", authenticationcode);

    setIsNexted(true);

    if (userid !== '' && usermail !== '' && authenticationcode !== '') {
      setIsNexted(true);
      navigate('/find-pw-second');
    } 
  };

  const handleAuthenticationCodeChange = (event) => {
    setAuthenticationode(event.target.value);
  };

  const handleInputValidation = (inputId, inputValue) => {
    if (inputId !== "authenticationCode-input") {
      const inputElement = document.getElementById(inputId);
      const placeholderText = inputElement.getAttribute("data-placeholder");
  
      if (inputValue === '') {
        inputElement.placeholder = `*${placeholderText}`;
        inputElement.style.color = "black";
        inputElement.style.fontFamily = "Pretendard_Light"; 
        inputElement.style.border = "3px solid #B3261E";
        inputElement.classList.add('placeholder-red'); 
      } else {
        inputElement.placeholder = placeholderText;
        inputElement.style.color = "initial";
        inputElement.style.fontFamily = "Pretendard_Light"; 
        inputElement.style.border = "none";
        inputElement.classList.remove('placeholder-red');
      }
    }
  };
  

  const startTimer = () => {
    setIsTimerRunning(true);

    setTimer(300);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setIsAuthenticationEmailSent(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    setTimerInterval(interval);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerInterval);
    setTimer(300);
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledArrow src={arrowImage}  onClick={handleBackToLogin} alt="Arrow Image" width="32" height="32" />
        <StyledImage src={Image} alt="Top Character" width="330" height="189" />
        <StyledParagraph>비밀번호 찾기</StyledParagraph>
        <StyledExplain>비밀번호는 가입 시 입력된 이메일로 찾으실 수 있습니다.</StyledExplain>
        <div style={{ position: 'absolute', transform: 'translate(900%, 144%)', zIndex: 2 }}>
          {(isNexted && !userid) && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <div style={{ position: 'absolute', transform: 'translate(900%, 511.5%)', zIndex: 2 }}>
          {(isNexted && !usermail) && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <StyledWord>
          <p>아이디</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="userid-input"
            type="text"
            placeholder= "아이디를 입력하세요."
            data-placeholder="아이디를 입력하세요."
            value={userid}
            onChange={handleInputChange}
          />
          <StyledClearButton visible={userid !== ''} onClick={handleClearButtonClick}>
            <img src={clearImage} alt="Clear" style={{ width: '32px', height: '32px' }} />
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
            <StyledInput
                id="usermail-input"
                type="text"
                placeholder="이메일을 입력하세요."
                data-placeholder="이메일을 입력하세요."
                value={usermail}
                onChange={handleMailChange}
            />
        </StyledInputContainer>
        <StyledSendButton onClick={handleSendClick}>
          {sendButtonText}
          {isTimerRunning && <StyledTimer>{Math.floor(timer / 60)}:{timer % 60}</StyledTimer>}
        </StyledSendButton>
        <StyledInputContainer>
          <StyledInput 
          id="authenticationCode-input"
          type="text" 
          placeholder="인증번호를 입력하세요." 
          value={authenticationcode}
          onChange={handleAuthenticationCodeChange}
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
