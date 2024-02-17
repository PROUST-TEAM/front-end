import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CardContainer = styled(motion.div)`
  /* 슬라이드 카드의 스타일을 정의 */
  height: 580px;
  width: 750px;
  border-radius: 30px;
  background-color: #E0E0E0;
  padding: 25px;
  overflow-y: auto;
  box-shadow: 3px 3px 10px rgba(0.1, 0.3, 0, 0.3); /* 그림자 추가 */

  &::-webkit-scrollbar {
    background: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #737373;
    border-radius: 100px;
  }
`;

const Title = styled(motion.h2)`
  /* 제목 스타일을 정의 */
  margin-top: 40px;
  margin-left: 10px;
  font-family: Pretendard_ExtraBold;
  font-size: 30px;
  color: black;
`;

const Subtitle = styled(motion.h5)`
  /* 부제목 스타일을 정의 */
  font-family: Pretendard_SemiBold;
  font-size: 25px;
  color: #424141;
  margin-top: 15px;
  margin-left: 10px;
  line-height: 1.2;
`;

const SpacedText = styled.span`
  white-space: pre-line;
`;

const SlideCard = ({ title, subtitle, describe, onClick }) => {
  return (
    <CardContainer>
      <Subtitle>
        <SpacedText>{describe}</SpacedText>
      </Subtitle>
    </CardContainer>
  );
};

export default SlideCard;