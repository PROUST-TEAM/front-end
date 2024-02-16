import React, { useState } from "react";
import styled from "styled-components";
import secondImage from "../images/sec_charac.png";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SlideCard from "../components/SlideCard";

const ColumnContainer = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
`;

const ColumnContent = styled.div`
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-bottom: 100px;
`;

const ProustSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt_ExtraBold;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
`;

const ColumnSpan = styled.span`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt_ExtraBold;
  text-align: center;
`;

const TopImage = styled.div`
  position: relative;
  top: -200px;
  > img {
    width: 600px;
    height: 336px;
    margin-left: 35px;
  }
`;

const SpacedText = styled.span`
  white-space: pre-line;
`;

const items = [
  { id: "1", title: "초보 가이드", subtitle: "향수의 기초를 알고 싶은\n 초보를 위한 빠르고 간단한 향수 가이드" },
  { id: "2", title: "향의 노트", subtitle: "탑, 미들, 베이스\n노트에 대한 기본지식" },
  { id: "3", title: "향의 지속력", subtitle: "부항률에 따른\n지속력에 대한 기본지식" },
  { id: "4", title: "향수 사용법", subtitle: "퍼퓸 포인트를 잡는\n적절하고 올바른 향수 사용방법" },
  { id: "5", title: "향수 보관법", subtitle: "향수를 사용하는 것 만큼이나\n중요한 향수를 보관하는 방법과 Tip" },
];

const motionDivStyle = { 
  height: "150px",
  borderRadius: "30px",
  background: "#B3B3B3",           
  padding: "25px",
};

const motionTextStyle = {
  marginTop: "40px",
  marginLeft: "10px",
  fontFamily: "Pretendard_ExtraBold",
  fontSize: "30px",
  color: "black",
};

const motionTextStyle2 = {
  fontFamily: "Pretendard_SemiBold",
  fontSize: "25px",
  color: "#424141",
  marginTop: "15px",
  marginLeft: "10px",
  lineHeight: "1.2",
};

const animateDivStyle = { 
  height: "700px",
  width: "800px",
  borderRadius: "30px",
  background: "white",           
  padding: "25px",
};

const getItemStyle = (id) => {
  switch (id) {
    case "1":
      return {
        gridColumn: "span 2",
      };
    case "2":
      return {
      };
    case "3":
      return {
        gridColumn: "span 1",
      };
    case "4":
      return {
        gridColumn: "span 2",
      };
    case "5":
      return {
        gridColumn: "span 3",
      };
    default:
      return {
        width: "950px",
      };
  }
};

export default function Column() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <ColumnContainer>
        <Title>
          <ProustSpan>PROUST</ProustSpan>
          <br />
          <ColumnSpan>COLUMN</ColumnSpan>
          <TopImage>
            <img src={secondImage} alt="Top Character" />
          </TopImage>
        </Title>
        <ColumnContent>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={selectedId === item.id ? selectedId : item.id}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              style={{
                ...motionDivStyle,
                ...getItemStyle(item.id),
                backgroundColor: selectedId === item.id ? "#FFFFFF" : motionDivStyle.background,
              }}
            >
              <motion.h2 style={motionTextStyle}>{item.title}</motion.h2>
              <motion.h5 style={motionTextStyle2}>
                <SpacedText>{item.subtitle}</SpacedText>
              </motion.h5>
            </motion.div>
          ))}
        </ColumnContent>
      </ColumnContainer>

      <AnimatePresence>
  {selectedId !== null ? (
    <motion.div
      key="overlay"
      className="overlay"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 1 ,transition: { type: "tween", duration: 0.5 }, }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      layoutId={selectedId}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)", // 뒷 배경 blur 처리
        zIndex: 3, // 선택된 div가 다른 요소 위에 띄워지도록 z-index 설정
      }}
    >
      <motion.div
        style={{
          ...animateDivStyle,
          ...getItemStyle(selectedId),
          backgroundColor: "#FFFFFF", 
        }}
      >
        <motion.h2 
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          fontFamily: "Pretendard_ExtraBold",
          fontSize: "30px",
          color: "black",
          textAlign: "center",  // 가운데 정렬을 위한 스타일
        }}>
        {items.find((item) => item.id === selectedId)?.title}
      </motion.h2>
        <SlideCard
            //title={items.find((item) => item.id === selectedId)?.title}
            //subtitle={items.find((item) => item.id === selectedId)?.subtitle}
            onClick={() => setSelectedId(null)}
        />
        
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      key="overlay"
      className="overlay"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
      exit={{ 
        opacity: 0,
        scale: 0,
      }}
      layoutId={selectedId}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)", // 뒷 배경 blur 처리
        zIndex: 3, // 선택된 div가 다른 요소 위에 띄워지도록 z-index 설정
      }}
    >
    <motion.div
        style={{
          ...animateDivStyle,
          ...getItemStyle(selectedId),
          backgroundColor: "#FFFFFF", 
        }}
    >
      <motion.h2 style={motionTextStyle}>
        {items.find((item) => item.id === selectedId)?.title}
      </motion.h2>
      <motion.h5 style={motionTextStyle2}>
        <SpacedText>{items.find((item) => item.id === selectedId)?.subtitle}</SpacedText>
      </motion.h5>
      <motion.button
        onClick={() => setSelectedId(null)}
      >Close</motion.button>
    </motion.div>
  </motion.div>
  )}
</AnimatePresence>

    </AnimateSharedLayout>
  );
}