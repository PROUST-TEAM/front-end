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
  { id: "4", title: "향수 사용법", subtitle: "퍼퓸 포인트를 잡는\n적절하고 올바른 향수 사용방법" 
  ,describe:"안녕~! 다들 향기를 입는다는 말을 들어봤을 거야, 옷뿐만 아니라 향기를 통해서 개성을 느낄 수 있게 입는다고 표현하기도 하지.\n올바른 향수 사용법을 익히면 향수를 사용할 때 매력을 더 높일 수 있을 거야 ㅎㅎ\n\n향수의 색감이 있는지 없는지에 따라서 방법이 달라져. 그리고 부위에 따라서도 향기의 정도가 다른데, 그럼 같이 살펴볼까?\n\n먼저 향수는 주로 맥박이 뛰는 곳인 귀 뒷부분과 목덜미에 뿌려서 사용해!\n옷에 뿌리는 경우에는 옷소매, 목, 무릎 안쪽 등에 뿌려서 사용하는데, 이때 향수의 색감이 있는지 없는지가 매우 중요해 왜냐면 색감이 있는 향수는 옷에 착색될 수도 있기 때문이야. 향수에 색감이 있다면 흰옷을 피해줘!\n그럼 따라서 사용법을 하나씩 살펴보자\n\n1) 머리\n머리에 가깝게 향수를 뿌리면 향이 강하게 남기 때문에 손에 향수를 뿌려서 머리를 빚어주면 은은하게 깨끗한 향을 만들 수 있어! \n\n2) 귀 뒷면 \n향수를 즐겨서 사용하지 않는 경우에 향이 진하게 나는 걸 싫어하는 친구들이 있어! 그런 친구들은 가볍게 포인트로 귀 뒷면에 뿌려서 사용하는 걸 추천해~!\n\n3) 손목과 팔뚝 안쪽\n손목과 팔뚝 안쪽은 향기를 오래 지속시켜서 사용할 수 있는 부위야! 여름에 사용하면 오래 향기를 가져갈 수 있어.\n\n4) 허리\n진하지 않지만 그렇다고 약하지도 않게 향을 맡고 싶다면 허리에 향수를 사용해 봐!\n\n5) 다리\n은은하지만 확실하게 퍼지게 하고 싶을 때 발목이나 다리에 향수를 사용해! 너의 발걸음을 따라 향기가 이동할 거야!\n이상으로 향수 사용법에 대한 설명을 마칠게!"},
  { id: "5", title: "향수 보관법과 주의사항", subtitle: "향수를 사용하는 것 만큼이나\n중요한 향수를 보관하는 방법과 Tip" 
  ,describe:"안녕~! 향수에 대해서 알고, 사용하는 방법에 대해서 배우는 것 만큼이나 중요한것이 잘 보관하고 주의사항을 잘 지키는 거야!\n\n향수는 올바르게 보관하지 않으면 향기와 품질을 쉽게 잃어버리기도 하고, 유통기한이 지난 향수를 잘못 사용하면 피부에 문제가 생기기도 하니까 말이야. 그렇다면 나와 함께 보관법과 주의사항에 대해서 살펴보자!\n\n향수를 보관하는 방법은 먼저, 직사광선을 피하는거야.\n직사광선은 향수의 향기를 변질시키고 증발하게 만들어서 되도록이면 직사광선이 없는 곳에 보관하는 것이 좋아.n향수를 보관하는 두 번째 방법은 습도와 온도가 변하지 않는 곳에 두는거야.\n온도가 변하는 곳은 향수의 품질에 영향을 크게 줄 수 있어! 습도가 높고 온도가 자주 바뀌는 욕실같은 곳은 피하는 것이 좋겠지??\n\n그렇다면 다음은 향수의 주의사항이야.\n\n첫 번째, 향수가 분사되는 입구 부위를 손으로 만지거나, 피부에 닿지 않게 해줘!\n입구가 피부에 닿으면 세균이나 유분, 지방성분으로 향수가 변질될 수 있기 때문이야 ㅎㅎ\n\n두 번째, 보관할 때 다른 강한 향기를 내는 물질들과 가깝게 두지 않도록 해!\n다른 강한 향기와 함께 보관되면 향수의 품질이 많이 떨어질 수 있어. 그렇기 때문에 다른 화장품이나 클리너와 함께 보관하는건 주의해야 해~\n\n세 번째, 유통기한을 잘 확인해줘!\n보관하는 날짜를 많이 지난 향수는 몸에 안 좋을 수 있어! 피부에 잘못 사용하면 피부에 문제를 일으키기 때문에 피해주는게 좋아! \n이상으로 향수 보관법과 주의사항에 대한 설명을 마칠게!"},
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