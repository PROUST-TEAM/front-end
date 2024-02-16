import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CardContainer = styled(motion.div)`
  /* 슬라이드 카드의 스타일을 정의 */
  height: 200px;
  width: 750px;
  border-radius: 30px;
  background-color: #F2F2F2;
  padding: 25px;
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

const SlideCard = ({ title, subtitle, onClick }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Subtitle>
        <SpacedText>{subtitle}</SpacedText>
      </Subtitle>
      <motion.button onClick={onClick}>Close</motion.button>
    </CardContainer>
  );
};

export default SlideCard;