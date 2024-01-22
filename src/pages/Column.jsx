import React, { useEffect } from 'react';
import styled from 'styled-components';
import secondImage from "../images/sec_charac.png";
//import columnBack from "../images/column_back_img.png";

const ColumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColumnContent = styled.div`
  margin-top: 80px;
  width: 1000px;
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
  top: -230px;
  > img {
    width: 850px;
    margin-left: 35px;
  }
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -190px;
`;

const ColumnTitle = styled.div`
  color: #FEFDFC;
  font-family: Pretendard_ExtraBold;
  font-size: 45px;
  margin-bottom: 35px;
  margin-top: 50px;
`;

// const BackImg = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Column1 = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 720px;

  >p{
    font-family: Pretendard_Medium;
    font-size: 25px;
    color: #F3F3F3;
    line-height: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  margin-top: 450px;
  margin-left: 300px;

  >p{
    font-family: Pretendard_Medium;
    font-size: 25px;
    color: #F3F3F3;
    line-height: 40px;
  }
`;

const Column3 = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 720px;

>p{
  font-family: Pretendard_Medium;
  font-size: 25px;
  color: #F3F3F3;
  line-height: 40px;
}
`;

// const ColoredText = styled.span`
//   color: #6BFF94 ; 
//   white-space: nowrap;
// `;

export default function Column() {

  useEffect(() => {
    // URL에 `#column1`이 있을 경우 해당 요소로 스크롤
    const hash = window.location.hash;
    if (hash === '#column1') {
      const element = document.getElementById('column1');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    else if (hash === '#column2') {
      const element = document.getElementById('column2');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    else if (hash === '#column3') {
      const element = document.getElementById('column3');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <ColumContainer>
      <ColumnContent>
        <Title>
          <ProustSpan>PROUST</ProustSpan>
          <br />
          <ColumnSpan>COLUMN</ColumnSpan>
          <TopImage>
            <img src={secondImage} alt="Top Character" />
          </TopImage>
        </Title>
        <ColumnList>
          {/* <BackImg>
            <img src={columnBack} alt='ColumnBack'/>
          </BackImg> */}
          <Column1 id="column1">
            <ColumnTitle>초보 가이드</ColumnTitle>
            <p>
            안녕~! 프루스트에 온 것을 환영해! 나는 여러분에게 향에 대해서 알려줄 미들이라고 해! 
            향수에 대해서 모르는 친구들은 다들 어디서부터 시작해야 할지 모르겠고, 
            향에 대해서 은근히 알고는 있지만 개념을 확실히 잡고 싶다고 생각할 거 같아. 
            향수의 세계는 알면 알수록 더 매력적일 거야.
            지금부터 우리가 향수에 대해서 자세히 알려줄 테니까 꽉 잡고 따라와!
            </p>
            <br />
            <p>
            먼저 향수의 구성에 대해서 다뤄볼게! 향수는 향수의 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어. 
            이 향료의 구성요소를 노트(Note)라고 부르고, 
            노트는 크게 탑 노트(Top Note), 미들 노트 (Middle Note), 베이스 노트 (Base Note)로 나뉘어. 
            노트마다 역할과 스타일이 다르다고 생각하면 돼!
            </p>
            <br />
            <p>
            그리고 베이스에 비해서 향료가 얼마나 함유되었는지에 따라서 향수의 지속시간이 달라지는 거 알고 있어?
            이 지속시간에 따라서 향수의 종류가 다르다고! 향수를 사다 보면 퍼퓸(Perfume), 오 드 뚜왈렛(Eau de toilette)이라는 말 들어본 적 있어? 
            바로 이게 향수의 종류인데, 간단히 말하면 향료가 많이 들어가면 오래 지속되는 향수가 된다고 생각하면 좋아~!
            </p>
            <br />
            <p>
            이런 이론적인 이야기를 벗어나서, 좋아하는 향이 있어? 나는 개인적으로 달달한 과일향을 엄청 좋아해! 좋아하는 향을 생각해 보고 그 향을 프루스트 검색창에 검색해 봐. 
            그리고 시향 장소에 직접 찾아가서 시향에 도전해 보는 걸 추천해. 
            그런 작은 경험이 너를 향수의 세계로 이끌 거야! 향수 세계에 온 것을 환영해 😊
            </p>
          </Column1>
          <Column2 id="column2">
            <ColumnTitle>향의 노트</ColumnTitle>
            <p>
            안녕 친구들~! 향의 노트에 대해서 이야기를 시작해 볼게! 
            향수는 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어. 
            이 향료의 구성요소를 노트(Note)라고 부르고, 노트는 크게 탑 노트(Top Note), 미들 노트 (Middle Note), 베이스 노트 (Base Note)로 나뉘어. 
            노트마다 역할과 스타일이 다르다구~!
            </p>
            <br />
            <p>
            먼저 탑 노트에 대해서 설명해 줄게! 탑 노트는 칙- 뿌리자마자 나는 향으로 
            알코올 향이랑 함께 강하게 느껴지는 게 특징이야. 향기의 첫인상이라고 생각하면 이해가 잘될 거야! 
            이 탑에는 내추럴 향료(ex) 자연 향) 그리고 감귤류 계열의 톡 쏘는 향기와 허브 향료들이 
            탑 노트 그룹에 포함된다고 생각하면 좋아. 즉 탑 노트는 가볍고 리프레시 한 향들로 이루어져 있고 5분에서 15분 정도 유지되는 향이야.
            </p>
            <br />
            <p>
            다음은 향료의 70%를 담당하는 미들 노트에 대해서 이야기해볼게! 
            미들 노트는 탑 노트가 날아가고 바로 느껴지는 향으로 향료의 중추를 담당하고 있다고 보면 좋아! 
            향의 밸런스와 풍부한 향의 느낌을 주는 게 특징이지. 
            미들에는 주로 꽃 향이랑 풀 향 매콤한 향 등등의 향료들이 미들 노트 그룹에 포함된다고 보면 좋아. 
            즉 미들 노트는 안정되고 핵심이 되는 향들로 이루어져 있고 20분에서 1시간 정도 유지되는 향이야.
            </p>
            <br />
            <p>
            마지막으로 베이스 노트에 대해서 다루도록 할게! 
            베이스 노트는 향료가 거의 날아가고 은은하게 남아있는 잔향이라고 생각하면 돼! 
            풍부하고 묵직한 향료로 깊이감과 지속력을 부여해 주는 게 특징이지. 
            베이스에는 주로 나무 계열이나 레진 그리고 머스크 등이 베이스 노트 그룹에 포함되어 있어. 
            즉 베이스 노트는 묵직한 느낌의 향들로 이루어져 있고 향이 다 날아갈 때까지 유지되는 향이야.
            </p>
            <br />
            <p>
            이상으로 탑 – 미들 – 바텀 노트에 대한 설명을 마칠게! 
            </p>
          </Column2>
          <Column3 id="column3" style={{marginTop: "450px", marginBottom: "200px"}}>
            <ColumnTitle>향의 지속력</ColumnTitle>
            <p>
            안녕~! 향의 지속력에 대해서는 다들 한 번은 들어본 적 있을 거야. 
            퍼퓸(Perfume), 오 드 뚜왈렛(Eau de toilette)처럼 말이지! 
            향수는 발향을 돕는 베이스와 향의 원료(향료)의 조합으로 이루어져 있어. 
            그리고 베이스에 비해서 향료가 얼마나 함유되었는지에 따라서 향수의 지속시간이 달라진다고 생각하면 돼! 
            이 향료의 함유 정도를 부향률이라고 앞으로 부르면서 시작해보도록 할게!
            </p>
            <br />
            <p>
            먼저 향수의 부향률 순서로 향수 종류를 정리하면 퍼퓸(Perfume){'>'}오 드 퍼퓸(Eau de Perfume(EDP)){'>'}오 드 뚜알렛(Eau de Toilette(EDT)){'>'}오 드 코롱(Eau de Cologne(EDC)){'>'}
            샤워 코롱(Shower Cologne){'>'}향수 비누(Perfume Soap) 순서대로 생각하면 편해! 
            </p>
            <br />
            <p>
            퍼퓸은 부향률 15 - 30%로 향이 5 - 7시간 이상 지속돼! 오랫동안 외출하는 친구들이 사용하면 좋아!
            오 드 퍼퓸은 부향률 8 – 15%로 향이 5시간 전후로 지속돼! 반나절 외출하는 경우 사용하면 좋겠지~?
            오 드 뚜알렛은 부향률 4 – 8%로 향이 3 – 4시간 정도 지속돼! 잠깐 가볍게 외출할 때 무겁지도 않고 쓰기 좋아.
            오 드 코롱은 부향률 3 – 5%로 향이 1 - 2시간 정도 지속돼! 들고 다니면서 자주 뿌리거나 리프리프 할 때 사용해도 좋은 걸~
            샤워코롱은 부향률 1 – 3%로 향이 1시간 전후로 지속돼! 샤워하고 가볍게 뿌려주면 좋아!
            향수 비누는 부향률 1.5 – 5% 정도로 향이 지속되지는 않아
            </p>
            <br />
            <p>
            이상으로 향의 지속력에 대한 설명을 마칠게!
            </p>
          </Column3>
        </ColumnList>
      </ColumnContent>
    </ColumContainer>
  )
}
