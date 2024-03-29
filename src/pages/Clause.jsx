import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import cla1 from "../images/clause1.png";
import cla2 from "../images/clause2.png";
import xImage from "../images/X.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 150px;
`;

const StyledContent = styled.div`
  text-align: center;
  color: black;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: bold;
  margin-top: 200px;
  margin-bottom: 150px;
`;

const StyledXButton = styled.img`
  position: fixed;
  top: 200px;
  right: 130px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Clause = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleJoinButtonClick = () => {
    console.log(location);
    navigate("/join", { state: location.state });
  };

  return (
    <StyledContainer>
      <StyledContent>
        <h1>서비스 이용약관 동의 [필수]</h1>
      </StyledContent>
      <img src={cla1} alt="Clause 1" style={{ width: "60%", height: "auto" }} />
      <StyledContainer>
        <StyledContent>
          <h1>개인정보 수집 및 이용 동의 [필수]</h1>
        </StyledContent>
        <img
          src={cla2}
          alt="Clause 2"
          style={{ width: "60%", height: "auto" }}
        />
      </StyledContainer>
      <StyledXButton src={xImage} alt="Close" onClick={handleJoinButtonClick} />
    </StyledContainer>
  );
};

export default Clause;
