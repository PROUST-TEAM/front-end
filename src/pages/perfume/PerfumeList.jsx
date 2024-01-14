import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import baseImage from "../../images/base_charac.png";
import perfume from "../../images/perfume.png";
import { FaRegHeart } from "react-icons/fa";

const PerfimeListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const PerfumeListContent = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
`;
const ListSpan = styled.div`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt;
  font-weight: 700;
`;
const PerfumeSpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt;
`;

const BaseImage = styled.div`
  position: relative;
  top: -200px;
  > img {
    width: 600px;
    height: 336px;
  }
`;

const Filter = styled.div`
  display: flex;
  margin-top: -200px;
  justify-content: center;
  > div {
    border: 2px solid #fefdfc;
    border-radius: 100px;
    padding: 15px 40px;
    margin: 0 15px;

    display: inline-block;
    > span {
    }
    font-size: 27px;
    color: #fefdfc;
    font-family: Pretendard_Bold;
  }
`;
const Perfumes = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 75px;
  margin-left: 140px;
  max-width: 1100px;
  flex-wrap: wrap;
`;

const Perfume = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-width: 300px;
  height: 381px;
  margin: 10px 10px;
  > div > p {
    font-size: 35px;
    color: #282727;
    font-family: Pretendard_ExtraBold;
    margin-top: 10px;
  }
  > svg {
    color: #282727;
    width: 31px;
    height: 28px;
    margin-top: 30px;
    margin-left: 200px;
  }
  > div > img {
    margin-top: -10px;
  }
`;

export default function PerfumeList() {
  return (
    <PerfimeListWrap>
      <PerfumeListContent>
        <PerfumeSpan>PERFUME</PerfumeSpan>
        <br />
        <ListSpan>LIST</ListSpan>
        <BaseImage>
          <img src={baseImage} alt="Base Character" />
        </BaseImage>

        <Filter>
          <div>우드</div>
          <div>시트러스</div>
          <div>메탈릭</div>
          <div>머스크</div>
          <div>플로럴</div>
        </Filter>
        <Perfumes>
          <Perfume>
            <FaRegHeart />
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
            <div>
              <p>Eau Duelle</p>
            </div>
          </Perfume>
          <Perfume>
            <FaRegHeart />
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
            <div>
              <p>Eau Duelle</p>
            </div>
          </Perfume>
          <Perfume>
            <FaRegHeart />
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
            <div>
              <p>Eau Duelle</p>
            </div>
          </Perfume>
          <Perfume>
            <FaRegHeart />
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
            <div>
              <p>Eau Duelle</p>
            </div>
          </Perfume>
          <Perfume>
            <FaRegHeart />
            <div>
              <img src={perfume} alt="Base Character" />
            </div>
            <div>
              <p>Eau Duelle</p>
            </div>
          </Perfume>
        </Perfumes>
      </PerfumeListContent>
    </PerfimeListWrap>
  );
}
