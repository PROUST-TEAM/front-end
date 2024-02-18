import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Image from "../images/third_charac.png";
import arrowImage from "../images/arrow-left.png";
import openImage from "../images/Login-Icons.png";
import closeImage from "../images/EyeClosed.png";
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
  font-family: Pretendard_ExtraBold;
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
  right: 37px;
  top: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
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

const StyledErrorMessage = styled.div`
  color: #b3261e;
  font-size: 16px;
  margin-top: -20px;
  margin-right: 35px;
  margin-bottom: 15px;
  text-align: right;
  font-family: Pretendard;
`;

const JoinSecond = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(true);
  const [containsNumber, setContainsNumber] = useState(true);
  const [additionalPasswordMessage, setAdditionalPasswordMessage] =
    useState("");
  const [
    additionalConfirmPasswordMessage,
    setAdditionalConfirmPasswordMessage,
  ] = useState("");

  const { state } = useLocation();
  const userEmailFromPreviousPage = state?.userEmail || "";
  const userName = state?.userName || "";
  const authenticationCode = state?.authenticationCode || "";

  const apiUrl = process.env.REACT_APP_API_URL;
  const [response, setResponse] = useState([]);

  const handleTogglePasswordVisibility = (inputType) => {
    if (inputType === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (inputType === "confirmPassword") {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    }
  };

  const handleBackToLogin = () => {
    navigate("/join");
  };

  const handlePasswordChange = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);

    let isLengthValid = false;
    let containsNumber = false;

    if (enteredPassword.trim() === "") {
      setAdditionalPasswordMessage("");
    } else {
      isLengthValid = enteredPassword.length >= 8;
      containsNumber = /\d/.test(enteredPassword);

      if (!isLengthValid) {
        setAdditionalPasswordMessage("비밀번호는 최소 8자 이상이어야 합니다.");
      } else if (!containsNumber) {
        setAdditionalPasswordMessage("비밀번호에 숫자가 포함되어야 합니다.");
      } else {
        setAdditionalPasswordMessage("");
      }
    }

    setIsLengthValid(isLengthValid);
    setContainsNumber(containsNumber);

    const isPasswordMatch = confirmPassword === enteredPassword;
    setIsPasswordMatch(isPasswordMatch);

    handleInputValidation("password-input", enteredPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    handleInputValidation("confirmPassword-input", event.target.value);

    const isPasswordMatch = event.target.value === password;
    setIsPasswordMatch(isPasswordMatch);

    if (event.target.value !== "") {
      if (!isPasswordMatch) {
        setAdditionalConfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
      } else {
        setAdditionalConfirmPasswordMessage("비밀번호가 일치합니다.");
      }
    } else {
      setAdditionalConfirmPasswordMessage("");
    }
  };

  const handleButtonClick = () => {
    const passwordInput = document.getElementById("password-input");
    const confirmPasswordInput = document.getElementById(
      "confirmPassword-input"
    );

    if (!password || (password === "" && isPasswordVisible)) {
      handleInputValidation("password-input", password);
    }

    if (
      !confirmPassword ||
      (confirmPassword === "" && isConfirmPasswordVisible)
    ) {
      handleInputValidation("confirmPassword-input", confirmPassword);
    }

    const joinConnect = async () => {
      try {
        console.log(authenticationCode);
        const response = await axios.post(`${apiUrl}/user/signup/confirm`, {
          id: userEmailFromPreviousPage,
          password: password,
          name: userName,
          confirmPassword: confirmPassword,
          UserAgree: 1,
        });

        console.log(response);
        setResponse(response.data.result);
      } catch (error) {
        console.error("Error signup request:", error);
      }
    };

    joinConnect();
  };

  const handleInputValidation = (inputId, inputValue) => {
    const inputElement = document.getElementById(inputId);

    if (inputElement) {
      const placeholderText = inputElement.getAttribute("data-placeholder");

      if (inputValue === "" || !isLengthValid || !containsNumber) {
        inputElement.placeholder = `*${placeholderText}`;
        inputElement.style.color = "black";
        inputElement.style.fontFamily = "Pretendard_Light";
        inputElement.style.border = "3px solid #B3261E";
        inputElement.classList.add("placeholder-red");
      } else if (inputId === "confirmPassword-input") {
        if (isPasswordMatch) {
          inputElement.placeholder = `*${placeholderText}`;
          inputElement.style.color = "black";
          inputElement.style.fontFamily = "Pretendard_Light";
          inputElement.style.border = "3px solid #22851A";
          inputElement.classList.remove("placeholder-red");
        } else {
          inputElement.placeholder = `*${placeholderText}`;
          inputElement.style.color = "black";
          inputElement.style.fontFamily = "Pretendard_Light";
          inputElement.style.border = "3px solid #B3261E";
          inputElement.classList.add("placeholder-red");
        }
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
        <StyledWord>
          <p>이메일</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            id="mail-input"
            type="text"
            placeholder="이메일을 입력하세요."
            data-placeholder="이메일을 입력하세요."
            value={userEmailFromPreviousPage}
            readOnly
          />
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledPasswordContainer>
          <StyledPasswordInput
            id="password-input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요."
            data-placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요."
            value={password}
            onChange={handlePasswordChange}
          />
          <StyledTogglePasswordButton
            src={isPasswordVisible ? openImage : closeImage}
            alt="Toggle Password Visibility"
            onClick={() => handleTogglePasswordVisibility("password")}
          />
        </StyledPasswordContainer>
        {additionalPasswordMessage && (
          <StyledErrorMessage>{additionalPasswordMessage}</StyledErrorMessage>
        )}
        <StyledWord>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인</p>
        </StyledWord>
        <StyledPasswordContainer>
          <StyledPasswordInput
            id="confirmPassword-input"
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요."
            data-placeholder="비밀번호를 입력해 주세요."
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <StyledTogglePasswordButton
            src={isConfirmPasswordVisible ? openImage : closeImage}
            alt="Toggle Password Visibility"
            onClick={() => handleTogglePasswordVisibility("confirmPassword")}
          />
        </StyledPasswordContainer>
        {additionalConfirmPasswordMessage && (
          <StyledErrorMessage>
            {additionalConfirmPasswordMessage}
          </StyledErrorMessage>
        )}
        <StyledNextButton onClick={handleButtonClick}>
          가입하기
        </StyledNextButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default JoinSecond;
