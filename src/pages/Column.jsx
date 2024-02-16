import React, { useState } from "react";
import styled from "styled-components";
import secondImage from "../images/sec_charac.png";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SlideCard from "../components/SlideCard";
import closeBtnImage from "../images/close_btn.png";

const ColumnContainer = styled.div`
user-select: none;
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
  margin-top: 130px;
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
  position: absolute;
  margin-top: -220px;
  margin-left: 100px;
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
  { id: "1", title: "초보 가이드", subtitle: "향수의 기초를 알고 싶은\n 초보를 위한 빠르고 간단한 향수 가이드"
  , describe: "안녕~! 프루스트에 온 것을 환영해!\n 나는 여러분에게 향에 대해서 알려줄 미들이라고 해!\n \n향수에 대해서 모르는 친구들은 다들 어디서부터 시작해야 할지 모르겠고, 향에 대해서 은근히 알고는 있지만 개념을 확실히 잡고 싶다고 생각할 거 같아. 향수의 세계는 알면 알수록 더 매력적일 거야. 지금부터 우리가 향수에 대해서 자세히 알려줄 테니까 꽉 잡고 따라와! \n\n먼저 향수의 구성에 대해서 다뤄볼게!\n 향수는 향수의 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어. 이 향료의 구성요소를 노트(Note)라고 부르고, 노트는 크게 탑 노트(Top Note), 미들 노트 (Middle Note), 베이스 노트 (Base Note)로 나뉘어. 노트마다 역할과 스타일이 다르다고 생각하면 돼!\n\n그리고 베이스에 비해서 향료가 얼마나 함유되었는지에 따라서 향수의 지속시간이 달라지는 거 알고 있어?\n 이 지속시간에 따라서 향수의 종류가 다르다고! \n\n향수를 사다 보면 퍼퓸(Perfume), 오 드 뚜왈렛(Eau de toilette)이라는 말 들어본 적 있어? 바로 이게 향수의 종류인데, 간단히 말하면 향료가 많이 들어가면 오래 지속되는 향수가 된다고 생각하면 좋아~!\n\n이런 이론적인 이야기를 벗어나서, 좋아하는 향이 있어?\n 나는 개인적으로 달달한 과일향을 엄청 좋아해!\n 좋아하는 향을 생각해 보고 그 향을 프루스트 검색창에 검색해 봐. 그리고 시향 장소에 직접 찾아가서 시향에 도전해 보는 걸 추천해. 그런 작은 경험이 너를 향수의 세계로 이끌 거야! 향수 세계에 온 것을 환영해" },
  { id: "2", title: "향의 노트", subtitle: "탑, 미들, 베이스\n노트에 대한 기본지식"
  ,describe:"안녕 친구들~!\n 향의 노트에 대해서 이야기를 시작해 볼게! 향수는 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어.\n 이 향료의 구성요소를 노트(Note)라고 부르고, 노트는 크게 탑 노트(Top Note), 미들 노트 (Middle Note), 베이스 노트 (Base Note)로 나뉘어. 노트마다 역할과 스타일이 다르다구~!\n\n먼저 탑 노트에 대해서 설명해 줄게!\n 탑 노트는 칙- 뿌리자마자 나는 향으로 알코올 향이랑 함께 강하게 느껴지는 게 특징이야.\n 향기의 첫인상이라고 생각하면 이해가 잘될 거야! 이 탑에는 내추럴 향료(ex) 자연 향) 그리고 감귤류 계열의 톡 쏘는 향기와 허브 향료들이 탑 노트 그룹에 포함된다고 생각하면 좋아. \n즉 탑 노트는 가볍고 리프레시 한 향들로 이루어져 있고 5분에서 15분 정도 유지되는 향이야.\n\n다음은 향료의 70%를 담당하는 미들 노트에 대해서 이야기해볼게!\n 미들 노트는 탑 노트가 날아가고 바로 느껴지는 향으로 향료의 중추를 담당하고 있다고 보면 좋아! 향의 밸런스와 풍부한 향의 느낌을 주는 게 특징이지. 미들에는 주로 꽃 향이랑 풀 향 매콤한 향 등등의 향료들이 미들 노트 그룹에 포함된다고 보면 좋아. \n즉 미들 노트는 안정되고 핵심이 되는 향들로 이루어져 있고 20분에서 1시간 정도 유지되는 향이야.\n\n마지막으로 베이스 노트에 대해서 다루도록 할게!\n 베이스 노트는 향료가 거의 날아가고 은은하게 남아있는 잔향이라고 생각하면 돼! 풍부하고 묵직한 향료로 깊이감과 지속력을 부여해 주는 게 특징이지. 베이스에는 주로 나무 계열이나 레진 그리고 머스크 등이 베이스 노트 그룹에 포함되어 있어. \n즉 베이스 노트는 묵직한 느낌의 향들로 이루어져 있고 향이 다 날아갈 때까지 유지되는 향이야.\n\n이상으로 탑 – 미들 – 바텀 노트에 대한 설명을 마칠게!" },
  { id: "3", title: "향의 지속력", subtitle: "부항률에 따른\n지속력에 대한 기본지식" 
  ,describe :"안녕~! 향의 지속력에 대해서는 다들 한 번은 들어본 적 있을 거야.\n 퍼퓸(Perfume), 오 드 뚜왈렛(Eau de toilette)처럼 말이지!\n\n 향수는 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어. 그리고 베이스에 비해서 향료가 얼마나 함유되었는지에 따라서 향수의 지속시간이 달라진다고 생각하면 돼! 이 향료의 함유 정도를 부향률이라고 앞으로 부르면서 시작해보도록 할게!\n\n먼저 향수의 부향률 순서로 향수 종류를 정리하면 퍼퓸(Perfume) > 오 드 퍼퓸(Eau de Perfume(EDP)) > 오 드 뚜알렛(Eau de Toilette(EDT)) > 오 드 코롱(Eau de Cologne(EDC)) > 샤워 코롱(Shower Cologne) > 향수 비누(Perfume Soap) 순서대로 생각하면 편해! \n\n퍼퓸은 부향률 15 - 30%로 향이 5 - 7시간 이상 지속돼! 오랫동안 외출하는 친구들이 사용하면 좋아!\n\n오 드 퍼퓸은 부향률 8 – 15%로 향이 5시간 전후로 지속돼! 반나절 외출하는 경우 사용하면 좋겠지~?\n\n오 드 뚜알렛은 부향률 4 – 8%로 향이 3 – 4시간 정도 지속돼! 잠깐 가볍게 외출할 때 무겁지도 않고 쓰기 좋아.\n\n오 드 코롱은 부향률 3 – 5%로 향이 1 - 2시간 정도 지속돼! 들고 다니면서 자주 뿌리거나 리프리프 할 때 사용해도 좋은 걸~\n\n샤워코롱은 부향률 1 – 3%로 향이 1시간 전후로 지속돼! 샤워하고 가볍게 뿌려주면 좋아!\n\n향수 비누는 부향률 1.5 – 5% 정도로 향이 지속되지는 않아\n\n이상으로 향의 지속력에 대한 설명을 마칠게!"},
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
  height: "710px",
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
    // <AnimateSharedLayout type="crossfade">
    <>
      <ColumnContainer>
        <Title>
          <ProustSpan>PROUST</ProustSpan>
          <br />
          <ColumnSpan>COLUMN</ColumnSpan>
          <TopImage>
            <img src={secondImage} alt="Top Character" />
          </TopImage>
        </Title>
        <ColumnContent
          >
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
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
        <motion.div
         style={{
          display: "flex",
          flexDirection:"row",
          justifyContent: "space-between", // 가로 방향으로 정렬
          textAlign: "center",
          alignItems:"center",
          marginTop: "-10px",
          marginBottom: "7px",
         }}>
          <motion.h2 
          style={{
            marginTop: "20px",
            marginLeft: "30px",
            marginBottom: "20px",
            fontFamily: "Pretendard_ExtraBold",
            fontSize: "30px",
            color: "black",
            textAlign: "center",  // 가운데 정렬을 위한 스타일
          }}>
          {items.find((item) => item.id === selectedId)?.title}
          </motion.h2>
          <motion.div
            onClick={() => setSelectedId(null)}
            style={{
              marginRight: "20px",
            }}
            
          ><img src={closeBtnImage} alt="CloseButton" 
          style={{
            filter: "invert(0.5)",
            width: "20px",
            height: "20px",
            marginRight: "10px", // 이미지 색상을 반전하여 검은 색으로 변경
          }}
          /></motion.div>
          </motion.div>
        <SlideCard
              //title={items.find((item) => item.id === selectedId)?.title}
              describe={items.find((item) => item.id === selectedId)?.describe}
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
    </motion.div>
  </motion.div>
  )}
</AnimatePresence></>
    // </AnimateSharedLayout>
  );
}