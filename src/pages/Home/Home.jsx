import React from 'react'
import * as S from './Home.style'
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";

export default function Home() {
  return (
    <S.HomeContainer>
    <S.MainContainer>
      <S.Title>
        PROUST
      </S.Title>
      <S.Image>
        <img src={topImage} alt="Top Character" />
      </S.Image>
      <S.SubTitle>
      <S.ColoredText>몰랐던 향수 정보</S.ColoredText> 찾는데 낭비하는 시간,
        <p>프루스트가 아껴줄게!</p>
      </S.SubTitle>
      <S.VerticalLine/>
      <S.Circle/>
    </S.MainContainer>
    <S.SearchContainer>
      <S.Input 
        type="text"
        placeholder= "향수? 나에게 다 물어봐"
        />
      <S.SearchButton>
        <img src={searchImage} alt="SearchImg" />
      </S.SearchButton> 
    </S.SearchContainer>
    <S.KeyWordContainer>
      <S.KeyWordTitle>KEYWORD</S.KeyWordTitle>
      <S.KeyWordDes>향수 키워드를 통해 향수 정보를 알아봐!</S.KeyWordDes>
      <S.KeyButton>
        <button>향수와 젠더</button>
        <button>향의 노트</button>
        <button>향수와 젠더</button>
      </S.KeyButton>
      <S.KeyButton>
        <button>향의 노트</button>
        <button>향수와 젠더</button>
      </S.KeyButton>
    </S.KeyWordContainer>
    </S.HomeContainer>
  )
}