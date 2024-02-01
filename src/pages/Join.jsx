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
  display: flex;
  justify-content: center;
  margin-left: -20px;
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
  margin-right: 300px;
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
  margin-right: 5px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 5px;
  font-family: Pretendard_ExtraBold;
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

const StyledLoginLink = styled(Link)`
  color: skyblue;
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
        <StyledArrow onClick={handleBackToLogin}>&#10229;</StyledArrow>
        <StyledImage src={Image} alt="Top Character" width="300" height="168" />
        <StyledParagraph>회원가입</StyledParagraph>
        <StyledExplain>
          이미 가입된 계정이 있으신가요?{' '}
          <StyledLoginLink to="/login"> 로그인</StyledLoginLink>
        </StyledExplain>
        <StyledWord>
          <p>아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="아이디를 입력하세요"
            value={userid}
            onChange={handleInputChange}
          />
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요"
          />
        </StyledInputContainer>
        <StyledWord>
          <p>비밀번호 확인</p>
        </StyledWord>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="비밀번호를 입력해 주세요"
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
