import React from "react";
import styled from 'styled-components';
import cla1 from "../images/clause1.png";
import cla2 from "../images/clause2.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const StyledContent = styled.div`
  text-align: center;
  color: black;
  font-family: 'Pretendard-ExtraBold';
  font-size: 35px;
  margin-top: 200px;
  margin-bottom: 150px;
`;

const Clause = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <h1>서비스 이용약관 동의 [필수]</h1>
      </StyledContent>
      <img src={cla1} alt="Clause 1" style={{ width: '60%', height: 'auto' }} />
      <StyledContainer>
      <StyledContent>
        <h1>개인정보 수집 및 이용 동의 [필수]</h1>
      </StyledContent>
      <img src={cla2} alt="Clause 2" style={{ width: '60%', height: 'auto' }} />
    </StyledContainer>
    </StyledContainer>
  );
};

export default Clause;
