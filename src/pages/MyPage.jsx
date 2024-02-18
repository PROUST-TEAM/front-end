import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import topCharac from '../images/bg_top.png';
import openImage from '../images/wEyeOpend.png';
import closeImage from '../images/wEyeClosed .png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  user-select: none;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: 90px;
`;

const StyledParagraph = styled.p`
  color: white;
  margin-top: 20px;
  margin-bottom: 90px;
  font-size: 85px;
  font-family: Prompt_ExtraBold;
`;

const StyledImage = styled.img`
  margin-top: 60px;
`;

const StyledRow = styled.div`
white-space: nowrap;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const StyledWord = styled.div`
  white-space: nowrap;  
  margin-left: -5px;
  margin-right: 75px;
  font-size: 26px;
  font-family: Pretendard_ExtraBold;
  text-align: left;
  color: #6BFF94;
`;

const StyledInputContainer = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledInput = styled.input`
white-space: nowrap;
user-drag: none;
  user-select: none;
  width: 600px;
  height: 35px;
  padding: 7px;
  margin-top: 5px;
  background-color: black;
  color: white;
  border: 3px solid white; 
  font-family: Pretendard_Bold;
  font-size: 20px;
  text-indent: 10px;
  outline: none; /* 추가된 부분 - 포커스 효과 제거 */
`;

const StyledButtonContainer = styled.div`
  white-space: nowrap;
  user-select: none;
  display: flex;
  margin-top: 20px;
  margin-left: 632px;
  margin-bottom: 140px;
`;

const StyledTextButton = styled.button`
  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 15px;
  user-select: none;
  width: 80px;
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
`;

const StyledModifyButton = styled.button`
  user-select: none;
  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 15px;
  width: 80px;
  height: 33px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
`;

const StyledVisibleButton = styled.div`
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledVisibleIcon = styled.img`
  position: absolute;
  width: 25px;
  height: 17px;
  top: -6px;
  right: 16px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 50px 50px 20px 50px; 
  border-radius: 20px;
  text-align: left;
  width: 395px;
  height: 240px;
`;

const ModalTitle = styled.h2`
  font-family: Pretendard_ExtraBold;
  font-size: 25px;
  margin-bottom: 40px;
`;

const ModalSubtitle = styled.p`
  font-family: Pretendard_Bold;
  font-size: 20px;
  color: #7D7D7D;
  margin-top: 5px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledCancelButton = styled.button`
  background-color: #D9D9D9;
  border: none;
  border-radius: 7px;
  width: 183px;
  height: 52px;
  cursor: pointer;
  font-size: 20px;
  font-family: Pretendard_Bold;
  margin-left: 5px;
`;

const StyledConfirmButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 7px;
  width: 183px;
  height: 52px;
  cursor: pointer;
  font-size: 20px;
  font-family: Pretendard_Bold;
  color: #6BFF94;
  margin-right: 5px;
`;

export default function MyPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [userpw, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordButtonClick = () => {
    setPassword('');
  };

  const handleWithdrawal = () => {
    setIsModalOpen(true);
  };

  const handleWithdrawConfirm = async () => {
    // setIsModalOpen(false);
    // alert('계정이 성공적으로 삭제되었습니다.');
    try {
      const response = await axios.delete(`${apiUrl}/user/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsModalOpen(false);
        // 삭제가 성공적으로 이루어진 경우의 로직
        alert('계정이 성공적으로 삭제되었습니다.');
        // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem('token');
    
        // 계정탈퇴 후 /home으로 이동
        navigate('/home');  

        // 강제로 페이지 새로고침
        window.location.reload();
      } else {
        // 서버에서 에러 응답이 왔을 때의 처리
        console.error('계정 삭제에 실패했습니다.', response.statusText);
        setIsModalOpen(false);
      }
    } catch (error) {
      // 네트워크 에러 등 예외가 발생했을 때의 처리
      console.error('계정 삭제 중 에러가 발생했습니다.', error);
      setIsModalOpen(false);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleWithdrawCancel = () => {
    setIsModalOpen(false);
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user/mypage`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.result);
        console.log(userData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData(); // 초기 마운트 시에도 데이터를 가져오도록 호출
  }, []); 
  
  
  return (
    <StyledContainer>
      <StyledImage src={topCharac} alt="Top Character" width="120" height="120" />
      <StyledParagraph>MY PAGE</StyledParagraph>
 
      <StyledRow>
        <StyledWord style={{marginRight :"150px"}}>이름</StyledWord>
        <StyledInputContainer>
          <StyledInput id="name-modify"
          readOnly 
          value={userData?.name}
          onDragStart={(e) => e.preventDefault()}
           />
        </StyledInputContainer>
      </StyledRow>

      <StyledRow>
        <StyledWord style={{ width: "80px",marginRight :"115px"}}>이메일</StyledWord>
        <StyledInputContainer>
          <StyledInput id="mail-modify" type="text" readOnly value={userData?.userId}/>
        </StyledInputContainer>
      </StyledRow>
      
      <StyledButtonContainer>
        <StyledTextButton onClick={handleWithdrawal}>탈퇴하기</StyledTextButton>
        <Link to="/myPageModify">
          <StyledModifyButton>수정하기</StyledModifyButton>
        </Link>
      </StyledButtonContainer>

      <ModalContainer isOpen={isModalOpen}>
        <ModalContent>
          <ModalTitle>회원 탈퇴</ModalTitle>
          <ModalSubtitle>
          회원 탈퇴 시 계정 정보가 삭제되어
          </ModalSubtitle>
          <ModalSubtitle>
          복구가 불가능합니다.
          </ModalSubtitle>
          <ModalSubtitle>
          &nbsp;
          </ModalSubtitle>
          <ModalSubtitle>
          정말로 탈퇴하시겠습니까?
          </ModalSubtitle>
          <ModalButtons>
            <StyledCancelButton onClick={handleWithdrawCancel}>취소
            </StyledCancelButton>
            <StyledConfirmButton onClick={handleWithdrawConfirm}>계정삭제
            </StyledConfirmButton>
          </ModalButtons>
        </ModalContent>
      </ModalContainer>
    </StyledContainer>
  );
}
