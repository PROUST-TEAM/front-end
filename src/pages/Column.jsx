import React from 'react'
import styled from 'styled-components';
import topImage from "../images/top_charac.png";
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
  top: -220px;
  > img {
    width: 600px;
    height: 336px;
  }
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -150px;
`;

const ColumnTitle = styled.div`
  color: #FEFDFC;
  font-family: Pretendard_ExtraBold;
  font-size: 45px;
  margin-bottom: 35px;
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

export default function Column() {
  return (
    <ColumContainer>
      <ColumnContent>
        <Title>
          <ProustSpan>PROUST</ProustSpan>
          <br />
          <ColumnSpan>COLUMN</ColumnSpan>
          <TopImage>
            <img src={topImage} alt="Top Character" />
          </TopImage>
        </Title>
        <ColumnList>
          {/* <BackImg>
            <img src={columnBack} alt='ColumnBack'/>
          </BackImg> */}
          <Column1>
            <ColumnTitle>향의 노트</ColumnTitle>
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
            <br />
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
          </Column1>
          <Column2>
            <ColumnTitle>향의 노트</ColumnTitle>
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
            <br />
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
          </Column2>
          <Column1 style={{marginTop: "450px"}}>
            <ColumnTitle>향의 노트</ColumnTitle>
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
            <br />
            <p>
            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.

            일을 하다 보면 “oo 오드코롱을 구매했는데 향이 너무 빨리 날아가요”
            “매장에서 시향하고 구매 했는데 집에 와서 다시 맡아보니 그때랑 향이
            달라진 것 같아요, 혹시 이거 불량품인가요?” 등의 질문을 많이 받는다.
            위 질문을 봤을 때 고객이 어떤 점을 알지 못하고 향수를 구매한지 알고
            있다면, 당신은 기본적인 향수 정보를 알고 있는 사람이다.
            </p>
          </Column1>
        </ColumnList>
      </ColumnContent>
    </ColumContainer>
  )
}
