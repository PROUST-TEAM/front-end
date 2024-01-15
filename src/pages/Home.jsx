import React from 'react'
import styled from "styled-components";
import Main from "../components/MainPage/MainPage";
import Second from "../components/MainPage/SecondPage";
import Third from "../components/MainPage/ThirdPage";
import Fourth from "../components/MainPage/FourthPage";

const HomeContainer= styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Home() {
  return (
  <HomeContainer>
    <Main/>
    <Second/>
    <Third/>
    <Fourth/>
  </HomeContainer>
  )
}