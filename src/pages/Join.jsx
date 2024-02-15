import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../images/third_charac.png';
import clearImage from '../images/clear_Icon.png'
import arrowImage from '../images/arrow-left.png'
import openImage from '../images/Login-Icons.png';
import closeImage from '../images/EyeClosed.png'
import pointImage from '../images/point.png';
import { Link } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
  margin-left: -20px;
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
  display: flex;
  align-items: center;
  margin-left: 22px;
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

const StyledLoginLink = styled(Link)`
  color: #4AA2F3;
  text-decoration: none; 
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    cursor: pointer;
    text-decoration: none; 
  }
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 37px;
  top: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const StyledPasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 22px;
`;

const StyledPasswordInput = styled.input`
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

const StyledTogglePasswordButton = styled.img`
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 40%;
  transform: translateY(-50%);
  width: 28px;
`;


const Join = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [usermail, setUsermail] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNexted, setIsNexted] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setUsermail(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUsermail('');
  };

  const handleNextClick = () => {
    console.log('Next email logic');
  
    const usermailInput = document.getElementById("usermail-input");
    const passwordInput = document.getElementById("password-input");
    const confirmPasswordInput = document.getElementById("confirmpassword-input");
  
    handleInputValidation(usermailInput, "이메일을 입력하세요.", usermail);
    handleInputValidation(passwordInput, "영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요.", password);
    handleInputValidation(confirmPasswordInput, "비밀번호를 입력해 주세요.", confirmPassword);
  
    setIsNexted(true);
  };
  
  const handleInputValidation = (inputElement, placeholderText, inputValue) => {
    console.log('Input Validation:', inputElement, placeholderText, inputValue);
  
    if (inputElement && inputValue === '') {
      console.log('Setting styles for empty input...');
      inputElement.placeholder = `*${placeholderText}`;
      inputElement.style.color = "black";
      inputElement.style.fontFamily = "Pretendard_Light"; 
      inputElement.style.border = "3px solid #B3261E";
      inputElement.classList.add('placeholder-red'); 
    } else if (inputElement) {
      console.log('Resetting styles...');
      inputElement.placeholder = placeholderText;
      inputElement.style.color = "initial";
      inputElement.style.fontFamily = "Pretendard_Light"; 
      inputElement.style.border = "none";
      inputElement.classList.remove('placeholder-red');
    }
  };
  
  
  return (
    <StyledContainer>
      <StyledContent>
      <StyledArrow src={arrowImage}  onClick={handleBackToLogin} alt="Arrow Image" width="32" height="32" ></StyledArrow>
        <StyledImage src={Image} alt="Top Character" width="330" height="189" />
        <StyledParagraph>회원가입</StyledParagraph>
        <StyledExplain>
          이미 가입된 계정이 있으신가요?{' '}
          <StyledLoginLink to="/login"> 로그인</StyledLoginLink>
        </StyledExplain>
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="이메일을 입력하세요."
            data-placeholder="이메일을 입력하세요."
            value={usermail}
            onChange={handleInputChange}
          />
          <StyledClearButton visible={usermail !== ''} onClick={handleClearButtonClick}>
            <img src={clearImage} alt="Clear" style={{ width: '32px', height: '32px' }} />
          </StyledClearButton>
        </StyledInputContainer>
        <div style={{ position: 'absolute', transform: 'translate(942%, 138%)', zIndex: 2 }}>
          {(isNexted && !password) && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <div style={{ position: 'absolute', transform: 'translate(942%, 500.5%)', zIndex: 2 }}>
          {(isNexted && !confirmPassword) && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledPasswordContainer>
          <StyledPasswordInput
          type={isPasswordVisible ? "text" : "password"} 
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요."
            data-placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledTogglePasswordButton
            src={isPasswordVisible ? closeImage : openImage}
            alt="Toggle Password Visibility"
            onClick={handleTogglePasswordVisibility}
          />
        </StyledPasswordContainer>
        <StyledWord>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인</p>
        </StyledWord>
        <StyledPasswordContainer>
          <StyledPasswordInput
          type={isPasswordVisible ? "text" : "password"} 
            placeholder="비밀번호를 입력해 주세요."
            data-placeholder="비밀번호를 입력해 주세요."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <StyledTogglePasswordButton
            src={isPasswordVisible ? closeImage : openImage}
            alt="Toggle Password Visibility"
            onClick={handleTogglePasswordVisibility}
          />
          </StyledPasswordContainer>
        <StyledNextButton onClick={handleNextClick}>  
          다음
        </StyledNextButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default Join;
