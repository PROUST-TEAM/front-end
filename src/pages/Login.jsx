import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import topImage from "../images/top_charac.png";
import clearImage from "../images/clear_Icon.png";
import openImage from "../images/Login-Icons.png";
import closeImage from "../images/EyeClosed.png";
import pointImage from "../images/point.png";
import googleImage from "../images/google.png";
import kakaoImage from "../images/kakao.png";
import naverImage from "../images/naver.png";
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
import axios from "axios";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 48px;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-top: 55px;
  margin-right: -40px;
  margin-left: 80px;
  font-size: 35px;
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
  margin-bottom: 100px;
`;

const StyledWord = styled.div`
  margin-right: 450px;
  margin-bottom: 7px;
  font-size: 23px;
  font-family: Pretendard_Bold;
  text-align: left;
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 560px;
  height: 48px;
  padding: 6px;
  margin-top: 5px;
  margin-bottom: 30px;
  border: 3px solid #f0f0f0;
  background-color: #f0f0f0;
  border-radius: 6px;
  font-family: Pretendard_Light;
  font-size: 16px;
  text-indent: 20px;
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 15px;
  top: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;

const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: -370px;
`;

const StyledSwitch = styled.div`
  position: relative;
  width: 2.4em;
  height: 1.25em;
  border: 3px solid black;
  border-radius: 10em;
  overflow: hidden;
  cursor: pointer;
  background-color: black;
  transition: background-color 250ms linear;
`;

const StyledSlider = styled.div`
  position: absolute;
  top: -0.07em;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  background-color: white;
  border: 2px solid black;
  transition: left 250ms linear;
  background-color: ${({ isClicked }) => (isClicked ? "#6BFF94" : "white")};
  left: ${({ isClicked }) => (isClicked ? "calc(100% - 1.3em)" : "0")};
`;

const StyledSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const StyledSwitchSpan = styled.span`
  font-size: 16px;
  margin-left: 10px;
  font-family: Pretendard_ExtraBold;
`;

const StyledButton = styled.button`
  width: 572px;
  height: 50px;
  padding: 6px;
  margin-top: 50px;
  margin-bottom: 0px;
  background-color: black;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: Pretendard_Bold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: -30px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const StyledTextButton = styled(Link)`
  padding: 10px 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: black;
  font-family: Pretendard_Medium;
  text-decoration: none;
  margin-right: -27px;

  &:not(:last-child) {
    margin-right: -20px;
    margin-top: 0px;
  }
`;

const StyledFooter = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
`;

const StyledText = styled.span`
  font-size: 14px;
  color: black;
  font-family: Pretendard_Medium;
  margin: 0 5px;
`;

const StyledpwButton = styled.div`
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledPwIcon = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  right: -269px;
  top: -74px;
  cursor: pointer;
`;

const StyledLoginButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 68px;
  cursor: pointer;
`;

export default function Login() {
  const [isImageChanging, setIsImageChanging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [usermail, setUsermail] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [userpw, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const onClickLogin = async (event) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`, {
        id: usermail,
        password: userpw,
      });

      // 서버 응답 확인
      console.log("Server response:", response.data);

      // 로그인 토큰 저장
      localStorage.setItem("token", response.data.result.token);

      // 로그인 성공 후 페이지 이동
      navigate("/home");
      // 강제로 페이지 새로고침
      window.location.reload();
      
    } catch (error) {
      console.error("Error during API call:", error);
      alert("존재하지 않는 이메일입니다.");
    }
  };

  const handleLogin = () => {
    const usermailInput = document.getElementById("usermail-input");
    const passwordInput = document.getElementById("password-input");

    if (!usermail) {
      usermailInput.placeholder = "*이메일을 입력하세요.";
      usermailInput.style.color = "black";
      usermailInput.style.fontFamily = "Pretendard_Light";
      usermailInput.style.border = "3px solid #B3261E";
      usermailInput.classList.add("placeholder-red");
    } else {
      usermailInput.placeholder = "이메일을 입력하세요.";
      usermailInput.style.color = "initial";
      usermailInput.style.fontFamily = "Pretendard_Light";
      usermailInput.style.border = "3px solid #f0f0f0";
      usermailInput.classList.remove("placeholder-red");
    }

    if (!userpw || (userpw === "" && isPasswordVisible)) {
      passwordInput.placeholder = "*비밀번호를 입력하세요.";
      passwordInput.style.color = "black";
      passwordInput.style.fontFamily = "Pretendard_Light";
      passwordInput.style.border = "3px solid #B3261E";
      passwordInput.classList.add("placeholder-red");
    } else {
      passwordInput.placeholder = "비밀번호를 입력하세요.";
      passwordInput.style.color = "initial";
      passwordInput.style.fontFamily = "Pretendard_Light";
      passwordInput.style.border = "3px solid #f0f0f0";
      passwordInput.classList.remove("placeholder-red");
    }

    setIsLoggedIn(true);

    if (isClicked) {
      setPassword("");
      const storedEmail = localStorage.getItem("savedEmail");
      if (storedEmail) {
        setUsermail(storedEmail);
      }
      if (usermail !== storedEmail) {
        localStorage.setItem("savedEmail", usermail);
      }
    }
  };

  // 두 함수를 호출하는 함수
  const handleClick = () => {
    handleLogin();
    onClickLogin();
  };

  const handleSwitchClick = () => {
    setIsClicked(!isClicked);
  
    if (!isClicked && usermail.trim() !== "") {
      localStorage.setItem("savedEmail", usermail);
    } else {
      localStorage.removeItem("savedEmail");
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("savedEmail");
    const isEmailSaved = storedEmail ? true : false;
    
    setIsClicked(isEmailSaved);
    
    if (isEmailSaved) {
      setUsermail(storedEmail);
    }
  }, []);

  const handleInputChange = (event) => {
    setUsermail(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUsermail("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVisibility = () => {
    setIsImageChanging(true);
  
    setTimeout(() => {
      setIsPasswordVisible(!isPasswordVisible);
      setIsImageChanging(false); 
    }, 300);
  };

  const handlePasswordButtonClick = () => {
    const currentPassword = userpw;
    setPassword("");
    setTimeout(() => setPassword(currentPassword), 0);
  };

  const responseGoogle = async (response) => {
    try {
      const googleResponse = await axios.post(`${apiUrl}/user/google-login`, {
        googleToken: response.tokenId,
      });

      if (googleResponse.status === 200 && googleResponse.data.isSuccess) {
        console.log("Google Login Success");

    } else {
      console.error("Google Login Error:", googleResponse.data);
      if (googleResponse.status === 400) {
        alert(googleResponse.data.message);
      } else if (googleResponse.status === 500) {
        alert("서버 에러, 관리자에게 문의 바랍니다.");
      }
    }
  } catch (error) {
    console.error("Error during Google Sign-In API call:", error);
    }
  };

const handleGoogleLoginClick = () => {
  return (
    <GoogleLogin
      clientId="259951048619-egde61ikrbnm93stvus1rblp43l2v1nc.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

const handleKakaoLoginClick = () => {
  const redirectUri = `${window.location.origin}/user/kakao/callback`;
  window.location.href = `${apiUrl}/user/kakao?redirectUri=${encodeURIComponent(redirectUri)}`;
};

const responseKakao = (response) => {
  axios.post(`${apiUrl}/user/kakao/callback`, {
    code: response.code,
  })
  .then((kakaoResponse) => {
    if (kakaoResponse.status === 200 && kakaoResponse.data.isSuccess) {
      console.log("Kakao Login Success");
    } else {
      console.error("Kakao Login Error:", kakaoResponse.data);
      if (kakaoResponse.status === 400) {
        alert(kakaoResponse.data.message);
      } else if (kakaoResponse.status === 500) {
        alert("서버 에러, 관리자에게 문의 바랍니다.");
      }
    }
  })
  .catch((error) => {
    console.error("Error during Kakao Sign-In API call:", error);
    // 에러 처리 로직을 추가
  });
};

const handleNaverLoginClick = () => {
  const naverLoginButton = document.getElementById('naver-login-button');
  
  if (naverLoginButton) {
    naverLoginButton.click();
  } else {
    console.error("네이버 로그인 버튼이 존재하지 않습니다.");
  }
};

const handleNaverLoginButtonClick = () => {
  return (
    <>
      <NaverLogin
        clientId="1psM85IFXmJsYgUpmoLs"
        callbackUrl="http://localhost:3000/user/naver/callback"
        render={({ onClick }) => (
          <div id="naver-login-button" onClick={onClick}></div>
        )}
      />
      <img
        src={naverImage}
        alt="Naver"
        style={{ width: "90px", height: "90px", cursor: "pointer" }}
        onClick={handleNaverLoginClick}
      />
    </>
  );
};

  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledParagraph>
            <p>
              로그인하고 더 편하게
              <br />
              프루스트를 이용해 보세요.
            </p>
          </StyledParagraph>
          <StyledImage
            src={topImage}
            alt="Top Character"
            width="330"
            height="189"
          />
        </StyledContainer>
        <div
          style={{
            position: "absolute",
            transform: "translate(440%, 960%)",
            zIndex: 2,
            visibility: isImageChanging ? "hidden" : "visible",
          }}
        >
          {isLoggedIn && !usermail && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            transform: "translate(440%, 1329%)",
            zIndex: 2,
            visibility: isImageChanging ? "hidden" : "visible",
          }}
        >
          {isLoggedIn && userpw.trim() === "" && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <StyledWord>
          <p>이메일&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="usermail-input"
            type="text"
            placeholder="이메일을 입력하세요."
            value={usermail}
            onChange={handleInputChange}
          />
          <StyledClearButton
            visible={usermail !== ""}
            onClick={handleClearButtonClick}
          >
            {" "}
            <img
              src={clearImage}
              alt="Clear"
              style={{ width: "32px", height: "32px" }}
            />
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledInput
          id="password-input"
          type={isPasswordVisible ? "password" : "text"}
          placeholder="비밀번호를 입력하세요."
          defaultValue={userpw}
          onChange={handlePasswordChange}
        />
        <StyledpwButton
          visible={userpw !== ""}
          onClick={handlePasswordButtonClick}
        >
          <StyledPwIcon
            src={isPasswordVisible ? closeImage : openImage}
            alt={isPasswordVisible ? "Show Password" : "Hide Password"}
            onClick={handlePasswordVisibility}
          />
        </StyledpwButton>
        <StyledSwitchContainer>
          <StyledSwitchLabel>
            <StyledSwitch isClicked={isClicked} onClick={handleSwitchClick}>
              <StyledSlider isClicked={isClicked} />
            </StyledSwitch>
            <StyledSwitchSpan>이메일 기억하기</StyledSwitchSpan>
          </StyledSwitchLabel>
        </StyledSwitchContainer>
        <StyledButton onClick={handleClick}>로그인</StyledButton>
        <StyledButtonContainer>
          <StyledTextButton to="/find-pw">비밀번호 찾기</StyledTextButton>
          <StyledTextButton>|</StyledTextButton>
          <StyledTextButton to="/join">회원가입 하기</StyledTextButton>
        </StyledButtonContainer>
        <StyledFooter>
          <StyledText>─────────────────</StyledText>
          <StyledText>또는</StyledText>
          <StyledText>─────────────────</StyledText>
        </StyledFooter>
        <StyledLoginButtonContainer>
        <div onClick={handleGoogleLoginClick}>
          <GoogleLogin
            clientId="259951048619-egde61ikrbnm93stvus1rblp43l2v1nc.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <img
                src={googleImage}
                alt="Google"
                style={{ width: "90px", height: "90px", cursor: "pointer" }}
                onClick={renderProps.onClick}
              />
            )}
          />
        </div>
        <KakaoLogin
        token="aceaf7ca176ee32a2d617f4efacf4849"
        onSuccess={responseKakao}
        onFail={(error) => console.error('Kakao Login Error:', error)}
        >
        <img
          src={kakaoImage}
          alt="Kakao"
          style={{ width: "90px", height: "90px", cursor: "pointer" }}
        />
        </KakaoLogin>
        <div onClick={handleNaverLoginClick}>
    <NaverLogin
      clientId="1psM85IFXmJsYgUpmoLs"
      callbackUrl="http://localhost:3000/user/naver/callback"
      render={({ onClick }) => (
        <div>
          <div onClick={onClick}></div>
        </div>
      )}
    />
    <img
      src={naverImage}
      alt="Naver"
      style={{ width: "90px", height: "90px", cursor: "pointer" }}
    />
  </div>
        </StyledLoginButtonContainer>
      </StyledContent>
    </>
  );
}