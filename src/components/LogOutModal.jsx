import React from 'react'
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 450px;
  z-index: 3;

  p {
    margin-left: 30px;
    margin-bottom: 15px;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 20px;
    color: #7D7D7D;
  }

  button {
    padding: 8px 16px;
    margin: 0 10px;
    cursor: pointer;
    border: none;
    height: 53px;
    width: 187px;
    border-radius: 10px;
  }

  button.cancel {
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    background-color: #D9D9D9;
    color: black;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 20px;
  }

  button.logout {
    background-color: #171717;
    color: #6BFF94;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 20px;
  }
`

const Title = styled.div`
    font-family: "Pretendard_ExtraBold", sans-serif;
    font-size: 23px;
    margin-bottom: 30px;
    margin-top: 10px;
    margin-left: 30px;
`

const LogOutModal = ({ onClose, handleLogout }) => {
    return (
     <ModalOverlay>
        <ModalContent>
        <Title>로그아웃</Title>
        <p>로그아웃을 하시면 메인 화면으로 돌아갑니다</p>
        <p>정말로 로그아웃하시겠습니까?</p>
        <button className="cancel" onClick={onClose}>
              취소
        </button>
        <button className="logout" onClick={handleLogout}>
            로그아웃
        </button>
        </ModalContent>
    </ModalOverlay>
    );
};
    
export default LogOutModal;