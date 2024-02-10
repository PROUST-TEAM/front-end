import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import topImage from '../images/top_charac.png'
import clearImage from '../images/clear_Icon.png'
import openImage from '../images/Login-Icons.png'
import closeImage from '../images/EyeClosed.png'
import pointImage from '../images/point.png'
import googleImage from '../images/google.png'
import kakaoImage from '../images/kakao.png'
import naverImage from '../images/naver.png'
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
// import axios from 'axios';

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
  right: 47px;
  top: 57%;
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
  margin-left: -30px;
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

const StyledpwButton = styled.div`
  position: absolute;
  right: 42px;
  top: 57%;
  transform: translateY(-50%);
  cursor: pointer;
`

const StyledPwIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 544px;
  margin-top: 65px;
`;

const NaverLoginButton = () => {
  const handleNaverLogin = (response) => {
    console.log(response);
  };

  return (
    <NaverLogin
      clientId="9ur7a1HEB07xc5dow0Ev"
      callbackUrl="http://localhost:3000/login#"
      render={(props) => (
        <button onClick={props.onClick}>
          네이버로 로그인
        </button>
      )}
      onSuccess={handleNaverLogin}
      onFailure={(error) => console.error(error)}
    />
  );
};

export default function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [userid, setUserid] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [userpw, setPassword] = useState('');

  useEffect(() => {
    const storedPassword = localStorage.getItem('savedPassword');
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const handleSwitchClick = () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      localStorage.setItem('savedPassword', userpw);
    } else {
      localStorage.removeItem('savedPassword');
    }
  };

  const handleInputChange = (event) => {
    setUserid(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUserid('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordButtonClick = () => {
    setPassword('');
  };

  const handleLogin = () => {
    if (!userid) {
      document.getElementById("username-input").placeholder = "*아이디를 입력하세요!";
    }
    if (!userpw) {
      document.getElementById("password-input").placeholder = "*비밀번호를 입력하세요!";
    }
  
    if (isClicked) {
      setUserid(''); 
      const storedPassword = localStorage.getItem('savedPassword');
      if (storedPassword) {
        setPassword(storedPassword);
      }
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success', response);
  };
  
  const handleGoogleLoginFailure = (error) => {
    console.error('Google Login Failure', error);
  };

  const handleKakaoLoginSuccess = (response) => {
    console.log('Kakao Login Success', response);

    // // 서버로 전송할 데이터
    // const requestData = {
    //   kakaoToken: response.access_token,
    // };

    // // axios를 사용하여 GET 요청 수행
    // axios.get('/user/kakao/callback', { params: requestData })
    //   .then((serverResponse) => {
    //     console.log('Server Response:', serverResponse.data);
    //     // 필요한 작업 수행
    //   })
    //   .catch((error) => console.error('Error:', error));
  };

  const handleKakaoLoginFailure = (error) => {
    console.error('Kakao Login Failure', error);
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
          <p>아이디&nbsp;&nbsp;&nbsp;</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="username-input"
            type="text" 
            placeholder="아이디를 입력하세요" 
            value={userid}
            onChange={handleInputChange}
            />
          <StyledClearButton visible={userid !== ''} 
            onClick = {handleClearButtonClick}> <img src={clearImage} 
          alt="Clear" style={{ width: '24px', height: '24px' }} />
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledInput 
          id="password-input"
          type={isPasswordVisible ? "text" : "password"} placeholder="비밀번호를 입력하세요"  
          defaultValue={userpw}
          onChange={handlePasswordChange}/>
        <StyledpwButton visible={userpw !== ''} onClick={handlePasswordButtonClick}>
          <StyledPwIcon
            src={isPasswordVisible ? openImage : closeImage}
            alt={isPasswordVisible ? "Show Password" : "Hide Password"}
            onClick={handlePasswordVisibility}
          />  
        </StyledpwButton>
        <StyledSwitchContainer>
          <StyledSwitchLabel>
            <StyledSwitch onClick={handleSwitchClick}>
              <StyledSlider isClicked={isClicked} />
            </StyledSwitch>
            <StyledSwitchSpan>비밀번호 기억하기</StyledSwitchSpan>
          </StyledSwitchLabel>
        </StyledSwitchContainer>
        <StyledButton onClick={handleLogin}>로그인</StyledButton>
        <StyledButtonContainer>
          <StyledTextButton to="/find-pw">비밀번호 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton to="/join">회원가입 하기</StyledTextButton>
          </StyledButtonContainer>
        <StyledFooter>
          <StyledText>──────────────</StyledText>
          <StyledText>또는</StyledText>
          <StyledText>──────────────</StyledText>
        </StyledFooter>
        <GoogleLogin
          clientId="275366161123-it85kl8s9rsulusbbtsk7icfc09n0hba.apps.googleusercontent.com"
          buttonText="Google로 로그인"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
    />
     <KakaoLogin
        token="c8afde081c9636adc2e72393245455b2"
        onSuccess={handleKakaoLoginSuccess}
        onFail={handleKakaoLoginFailure}
        onLogout={() => console.log('Kakao Logout')}
        render={(props) => (
          <button onClick={props.onClick}>
            카카오로 로그인
          </button>
        )}
      />
      <NaverLoginButton /> 
  </StyledContent>
    </>
  );
} 