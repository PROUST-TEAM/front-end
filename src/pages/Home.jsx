import React from 'react'
import styled from "styled-components";
import Main from "../components/MainPage/MainPage";
import Second from "../components/MainPage/SecondPage";
import Third from "../components/MainPage/ThirdPage";
import Fourth from "../components/MainPage/FourthPage";
import Fifth from "../components/MainPage/FifthPage";

const HomeContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export default function Home() {
  return (
  <HomeContainer>
    <Main/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
  </HomeContainer>
  )
}