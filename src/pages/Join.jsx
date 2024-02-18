import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Image from "../images/third_charac.png";
import clearImage from "../images/clear_Icon.png";
import arrowImage from "../images/arrow-left.png";
import pointImage from "../images/point.png";
import { Link } from "react-router-dom";
import axios from "axios";

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
  margin-top: 75px;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-top: -20px;
  font-size: 29px;
  font-family: Pretendard_Bold;
`;

const StyledExplain = styled.p`
  color: #7d7d7d;
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
  margin-left: 30px;
  text-align: left;
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
  border: 3px solid #f0f0f0;
  background-color: #f0f0f0;
  border-radius: 6px;
  font-family: Pretendard_Light;
  font-size: 16px;
  text-indent: 20px;
  position: relative;
  z-index: 1;
`;

const StyledNextButton = styled.button`
  width: 572px;
  height: 50px;
  padding: 6px;
  margin-top: 30px;
  margin-left: 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: Pretendard_Bold;
  font-size: 20px;
`;

const StyledLoginLink = styled(Link)`
  color: #4aa2f3;
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
  right: 20px;
  top: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
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

const StyledErrorMessage = styled.div`
  color: #b3261e;
  font-size: 16px;
  margin-top: -20px;
  margin-left: 350px;
  margin-bottom: 20px;
  font-family: Pretendard;
`;

const StyledSendButton = styled.button`
  width: 120px;
  height: 32px;
  padding: 7px;
  margin-top: -5px;
  margin-left: 460px;
  margin-bottom: 10px;
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
  color: #7c0000;
`;

const StyledClauseContainer = styled.div`
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledClauseMessage = styled.p`
  font-size: 18px;
  font-family: Pretendard_Bold;
  color: black;
`;

const StyledCheckbox = styled.input`
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

const Join = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEmailClearButtonVisible, setIsEmailClearButtonVisible] =
    useState(false);
  const [isNameClearButtonVisible, setIsNameClearButtonVisible] =
    useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [username, setUsername] = useState(location?.state?.Name || ""); // Use the state value if available
  const [usermail, setUsermail] = useState(location?.state?.Email || "");
  const [authenticationcode, setAuthenticationcode] = useState("");
  const [isNexted, setIsNexted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAuthenticationEmailSent, setIsAuthenticationEmailSent] =
    useState(false);
  const [timer, setTimer] = useState(300);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const [response, setResponse] = useState();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleNameChange = (event) => {
    setUsername(event.target.value);
    setIsNameClearButtonVisible(event.target.value !== "");
  };

  const handleInputChange = (event) => {
    setUsermail(event.target.value);
    handleInputValidation("mail-input", event.target.value);
    setIsEmailClearButtonVisible(event.target.value !== "");

    const enteredEmail = event.target.value;
    setUsermail(enteredEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(enteredEmail) && enteredEmail.length <= 320;

    setIsEmailValid(isValid);
  };

  // const handleAuthenticationCodeChange = (event) => {

  // const authenticationcodeInput = document.getElementById(
  //   "authenticationcode-input"
  // );

  const handleClearButtonClick = (field) => {
    if (field === "name") {
      setUsername("");
      setIsNameClearButtonVisible(false);
      handleInputValidation("name-input", "");
    } else if (field === "email") {
      setUsermail("");
      setIsEmailClearButtonVisible(false);
      handleInputValidation("mail-input", "");
    }
  };

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

  const sendButtonText = isAuthenticationEmailSent
    ? "인증메일 재발급"
    : "인증메일 보내기";

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

  const sendMail = () => {
    //console.log("인증 이메일 전송 로직");
    setIsAuthenticationEmailSent(true);

    const joinConnect = async () => {
      try {
        const response = await axios.post(`${apiUrl}/user/signup/request`, {
          id: usermail,
        });

        console.log("인증번호", response.data.result);
        setResponse(response.data.result);
      } catch (error) {
        console.error("Error signup request:", error);
      }
    };

    joinConnect();
  };

  const nextClick = () => {
    // const usernameInput = document.getElementById("name-input");
    // const usermailInput = document.getElementById("mail-input");
    // const authenticationcodeInput = document.getElementById(
    //   "authenticationcode-input"
    // );

    if (!username) {
      handleInputValidation("name-input", username);
    }

    if (!usermail) {
      handleInputValidation("mail-input", usermail);
    }

    if (!authenticationcode) {
      handleInputValidation("authenticationcode-input", authenticationcode);
    }

    //setIsNexted(true);

    if (username && usermail && authenticationcode) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(usermail) && usermail.length <= 320;

      if (isValid) {
        console.log("내가 입력한 코드", authenticationcode);
        if (response == authenticationcode) {
          navigate("/join-second", {
            state: {
              userEmail: usermail,
              userName: username,
            },
          });
        } else {
          alert("인증번호가 일치하지 않습니다.");
        }
      }
    }
  };

  const handleInputValidation = (inputId, inputValue) => {
    const inputElement = document.getElementById(inputId);

    if (inputElement) {
      const placeholderText = inputElement.getAttribute("data-placeholder");

      if (inputValue === "" || !isEmailValid) {
        inputElement.placeholder = `*${placeholderText}`;
        inputElement.style.color = "black";
        inputElement.style.fontFamily = "Pretendard_Light";
        inputElement.style.border = "3px solid #B3261E";
        inputElement.classList.add("placeholder-red");
      } else {
        inputElement.placeholder = placeholderText;
        inputElement.style.color = "initial";
        inputElement.style.fontFamily = "Pretendard_Light";
        inputElement.style.border = "none";
        inputElement.classList.remove("placeholder-red");
      }
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledArrow
          src={arrowImage}
          onClick={handleBackToLogin}
          alt="Arrow Image"
          width="32"
          height="32"
        ></StyledArrow>
        <StyledImage src={Image} alt="Top Character" width="330" height="189" />
        <StyledParagraph>회원가입</StyledParagraph>
        <StyledExplain>
          이미 가입된 계정이 있으신가요?{" "}
          <StyledLoginLink to="/login"> 로그인</StyledLoginLink>
        </StyledExplain>
        <div
          style={{
            position: "absolute",
            transform: "translate(942%, 138%)",
            zIndex: 2,
          }}
        >
          {isNexted && !username && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            transform: "translate(942%, 510.5%)",
            zIndex: 2,
          }}
        >
          {isNexted && !usermail && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            transform: "translate(942%, 910.5%)",
            zIndex: 2,
          }}
        >
          {isNexted && !authenticationcode && (
            <img src={pointImage} alt="포인트 이미지" width="56" height="33" />
          )}
        </div>
        <StyledWord>
          <p>이름</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="name-input"
            type="text"
            placeholder="이름을 입력하세요."
            data-placeholder="이름을 입력하세요."
            value={username}
            onChange={handleNameChange}
          />
          <StyledClearButton
            visible={isNameClearButtonVisible}
            onClick={() => handleClearButtonClick("name")}
          >
            <img
              src={clearImage}
              alt="Clear"
              style={{ width: "32px", height: "32px" }}
            />
          </StyledClearButton>
        </StyledInputContainer>
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="mail-input"
            type="text"
            placeholder="이메일을 입력하세요."
            data-placeholder="이메일을 입력하세요."
            value={usermail}
            onChange={handleInputChange}
          />
          <StyledClearButton
            visible={isEmailClearButtonVisible}
            onClick={() => handleClearButtonClick("email")}
          >
            <img
              src={clearImage}
              alt="Clear"
              style={{ width: "32px", height: "32px" }}
            />
          </StyledClearButton>
        </StyledInputContainer>
        {usermail !== "" && !isEmailValid && (
          <StyledErrorMessage>유효하지 않은 이메일입니다.</StyledErrorMessage>
        )}
        <StyledSendButton onClick={sendMail}>
          {sendButtonText}
          {isTimerRunning && (
            <StyledTimer>
              {Math.floor(timer / 60)}:{timer % 60}
            </StyledTimer>
          )}
        </StyledSendButton>
        <StyledPasswordContainer>
          <StyledPasswordInput
            id="authenticationcode-input"
            text="type"
            placeholder="인증번호를 입력하세요."
            data-placeholder="인증번호를 입력하세요."
            value={authenticationcode}
            onChange={(event) => {
              setAuthenticationcode(event.target.value);
              //console.log(event.target.value);
            }}
          />
        </StyledPasswordContainer>
        <StyledClauseContainer>
          <StyledClauseMessage>
            <Link
              to={{
                pathname: `/clause`,
                state: {
                  Name: username,
                  Email: usermail,
                },
              }}
              style={{ color: "#4aa2f3", textDecoration: "underline" }}
            >
              이용약관
            </Link>
            에 전체 동의합니다.
          </StyledClauseMessage>
          <StyledCheckbox type="checkbox" />
        </StyledClauseContainer>
        <StyledNextButton onClick={nextClick}>다음</StyledNextButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default Join;
