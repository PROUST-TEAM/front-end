import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import topCharac from '../images/bg_top.png';
import openImage from '../images/Login-Icons.png';
import closeImage from '../images/EyeClosed.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
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
  user-select: none;
`;

const StyledImage = styled.img`
  margin-top: 60px;
  user-select: none;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
  user-select: none;
`;

const StyledWord = styled.div`
  margin-left: -5px;
  margin-right: 75px;
  font-size: 26px;
  font-family: Pretendard_ExtraBold;
  text-align: left;
  color: #6BFF94;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 600px;
  height: 35px;
  padding: 7px;
  margin-top: 5px;
  background-color: #E7E7E7;
  color: #7D7D7D;
  border: 3px solid #E7E7E7; 
  font-family: Pretendard_Bold;
  font-size: 20px;
  text-indent: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 650px;
  margin-bottom: 140px;
`;

const StyledTextButton = styled.button`
font-family: 'Pretendard_Bold', sans-serif;
  font-size: 15px;
  width: 80px;
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
  user-select: none;
`;

const StyledCompleteButton = styled.button`
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
  user-select: none;
`;

const StyledVisibleButton = styled.div`
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledVisibleIcon = styled.img`
  position: absolute;
  width: 29px;
  height: 29px;
  top: -12px;
  right: 15px;
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
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(true);
  const [username, setName] = useState('');
  const [userpw, setPassword] = useState('');
  const [userCkpw, setCkPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCkPasswordChange = (e) => {
    setCkPassword(e.target.value);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordCheckVisibility = () => {
    setIsPasswordCheckVisible(!isPasswordCheckVisible);
  };

  const handlePasswordButtonClick = () => {
    //setPassword('');
  };

  const handleCkPasswordButtonClick = () => {
    //setCkPassword('');
  };

  const handleWithdrawal = () => {
    setIsModalOpen(true);
  };

  const handleWithdrawConfirm = async () => {
    setIsModalOpen(false);
    alert('계정이 성공적으로 삭제되었습니다.');
    // try {
    //   const response = await axios.delete(`${apiUrl}/user/delete`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    //   if (response.status === 200) {
    //     // 삭제가 성공적으로 이루어진 경우의 로직
    //     alert('계정이 성공적으로 삭제되었습니다.');
    //     // 로컬 스토리지에서 토큰 삭제
    //     localStorage.removeItem('token');
    
    //     // 계정탈퇴 후 /home으로 이동
    //     navigate('/home');  

    //     // 강제로 페이지 새로고침
    //     window.location.reload();
    //     setIsModalOpen(false);
    //   } else {
    //     // 서버에서 에러 응답이 왔을 때의 처리
    //     console.error('계정 삭제에 실패했습니다.', response.statusText);
    //     setIsModalOpen(false);
    //   }
    // } catch (error) {
    //   // 네트워크 에러 등 예외가 발생했을 때의 처리
    //   console.error('계정 삭제 중 에러가 발생했습니다.', error);
    //   setIsModalOpen(false);
    // } finally {
    //   setIsModalOpen(false);
    // }
  };

  const handleCompleteClick = async (event) => {
    try {
      // 입력값이 비어있는지 확인
    if (!username.trim() || !userpw.trim() || !userCkpw.trim()) {
      alert('이름과 비밀번호를 입력해주세요.');
      console.log(username,userpw,userCkpw);
      return;
    }

    // 비밀번호가 8자 이상이 아니면 알림 표시 후 함수 종료
    if (userpw.trim().length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      console.log(username,userpw,userCkpw);
      return;
    }

    // 비밀번호와 확인 비밀번호가 일치하지 않으면 알림 표시 후 함수 종료
    if (userpw.trim() !== userCkpw.trim()) {
      alert('비밀번호가 일치하지 않습니다.');
      console.log(username,userpw,userCkpw);
      return;
    }
  
      // userpw와 userCkpw가 둘 다 비어있지 않고 서로 일치하며 8자 이상일 때 API 호출을 진행합니다.
      const cResponse = await axios.patch(`${apiUrl}/user/edit`, {
        password: userpw.trim(),
        confirmPassword: userCkpw.trim(),
        name: username.trim(),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // API 호출이 성공하면 원하는 동작을 수행합니다.
      console.log('API 호출 성공:', cResponse.data);
      alert('수정이 완료되었습니다.');
      window.location.href = '/login';
      localStorage.removeItem('token');

      console.log(username,userpw,userCkpw);
    } catch (error) {
      console.error('API 호출 에러:', error);
      // API 호출 에러 시 사용자에게 알림 등을 처리할 수 있습니다.
    }
};

  const handleWithdrawCancel = () => {
    setIsModalOpen(false);
  };

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
        setName(response.data.result?.name || '');
        //setName(response.data.result.name);
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
        <StyledWord style={{marginRight :"150px"}} >이름</StyledWord>
        <StyledInputContainer>
          <StyledInput id="name-modify"
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 설정해주세요"
           />
        </StyledInputContainer>
      </StyledRow>

      <StyledRow>
        <StyledWord style={{marginRight :"55px"}}>비밀번호 변경</StyledWord>
        <StyledInputContainer>
        <StyledInput id="pw-modify" type={isPasswordVisible ? "password" : "text"} placeholder="비밀번호를 설정해주세요" onChange={handlePasswordChange}/>
          <StyledVisibleButton onClick={handlePasswordButtonClick}>
            <StyledVisibleIcon
              src={isPasswordVisible ? closeImage : openImage}
              alt={isPasswordVisible ? "Show Password" : "Hide Password"}
              onClick={handlePasswordVisibility}
            />
            </StyledVisibleButton>
        </StyledInputContainer>
      </StyledRow>

      <StyledRow>
        <StyledWord style={{ marginRight :"30px"}}>비밀번호 재입력</StyledWord>
        <StyledInputContainer>
          {/* <StyledInput id="mail-modify" type="text" readOnly value={userData?.userId}/> */}
          <StyledInput id="pw-modify" type={isPasswordCheckVisible ? "password" : "text"} placeholder="비밀번호를 재입력해주세요" onChange={handleCkPasswordChange}/>
          <StyledVisibleButton onClick={handleCkPasswordButtonClick}>
            <StyledVisibleIcon
              src={isPasswordCheckVisible ? closeImage : openImage}
              alt={isPasswordCheckVisible ? "Show Password" : "Hide Password"}
              onClick={handlePasswordCheckVisibility}
            />
            </StyledVisibleButton>
        </StyledInputContainer> 
      </StyledRow>
      
      <StyledButtonContainer style={{marginRight :"15px"}}>
        <StyledTextButton onClick={handleWithdrawal}>탈퇴하기</StyledTextButton>
        <StyledCompleteButton onClick={handleCompleteClick}>완료하기</StyledCompleteButton>
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
