import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../images/third_charac.png';
import clearImage from '../images/clear_Icon.png'
import arrowImage from '../images/arrow-left.png'
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

const Join = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [userid, setUserid] = useState('');

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setUserid(event.target.value);
  };

  const handleNextClick = () => {
    console.log('Next email logic');
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
          <p>아이디</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={userid}
            onChange={handleInputChange}
          />
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요."
          />
        </StyledInputContainer>
        <StyledWord>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="비밀번호를 입력해 주세요."
          />
        </StyledInputContainer>
        <StyledNextButton onClick={handleNextClick}>
          다음
        </StyledNextButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default Join;
