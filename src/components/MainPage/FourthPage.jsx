import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import perfume from "../../images/perfume.png";
import barcode from "../../images/barcode.png";

const FourthContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  position: relative;
  margin-top: 200px;
`;

const Title = styled.div`
  color: white;

  font-family: 'Pretendard_ExtraBold', sans-serif;
  font-size: 40px;
  white-space: nowrap;
`;

const ColoredText = styled.span`
  color: #6BFF94 ; 
  white-space: nowrap;
`;

const BestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  > img{
    margin-top: 20px;
    height: 650px;
    width: auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  button {
    white-space: nowrap;
    background-color: black;
    color: white;
    font-family: 'Pretendard_ExtraBold', sans-serif;
    font-size: 25px;
    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;
    margin-top: 50px; /* 버튼과 이미지 사이 간격 조절 */
  }

  > button:hover {
    background-color: black;
    color: #6BFF94;

    border: 2px solid #6BFF94;
  }
`;


const ReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 15px;
  z-index: 1;
`;

const ReceiptTop = styled.div`
  background-color: #fefdfc;
  width: 296px;
  border-radius: 10px 10px 20px 20px;

  > img{
    margin-top: 15px;
    width: 133px;
    height: 190px;
  }
`;

const ReceiptTitle = styled.div`
  color: black;
  margin-top: 25px;

  font-family: 'Pretendard_ExtraBold', sans-serif;
  font-size: 38px;
`;

const HorizontalLine = styled.div`
  width: 262px;
  border-top: 1px solid #D9D9D9 ; 

  position: relative;
  margin-left: 15px;
  margin-top: 15px;
`;

const ReceiptSubTitle = styled.div`
  color: #555353;
  margin-top: 10px;

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 25px;
`;

const Explanation = styled.div`
  font-family: 'Pretendard_SemiBold', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.63);
  text-align: center;
  line-height: 1.4;
  margin-bottom: 18px;

  >p{
    margin-top: 15px;
  }
`;

const ReceiptBottom = styled.div`
  background-color: #fefdfc;
  width: 296px;
  border-radius: 20px 20px 10px 10px;

  > img{
    width: 241px;
  }
`;

export default function FourthPage() {

  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <FourthContainer>
        {isLoggedIn ? (
          <>
          <Title style={{fontSize: "60px"}}>
            PROUST PICK
          </Title>
          <BestContainer>
          <ReceiptContainer>
          <ReceiptTop>
            <ReceiptTitle>
                PROUST
                <p>PICK</p>
            </ReceiptTitle>
            <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
            <ReceiptSubTitle>
                Eau Duelle
            </ReceiptSubTitle>
            <Explanation>
              <p>
                오듀엘르 
              </p>
              <span>
                #신비로운 바닐라 #스파이스 #달달함 #우디
              </span>
            </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
            <ReceiptContainer>
            <ReceiptTop>
              <ReceiptTitle>
                 PROUST
                 <p>PICK</p>
              </ReceiptTitle>
              <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
              <ReceiptSubTitle>
                 Eau Duelle
              </ReceiptSubTitle>
              <Explanation>
                <p>
                  오듀엘르 
                </p>
                <span>
                  #신비로운 바닐라 #스파이스 #달달함 #우디
                </span>
              </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
            <ReceiptContainer>
            <ReceiptTop>
              <ReceiptTitle>
                 PROUST
                 <p>PICK</p>
              </ReceiptTitle>
              <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
              <ReceiptSubTitle>
                 Eau Duelle
              </ReceiptSubTitle>
              <Explanation>
                <p>
                  오듀엘르 
                </p>
                <span>
                  #신비로운 바닐라 #스파이스 #달달함 #우디
                </span>
              </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
        </BestContainer>

        </>
        ) : (
          <>
          <Title>
            <ColoredText>회원가입</ColoredText>하고 향수 추천받아봐
        </Title>
          <BestContainer style={{filter: 'blur(14px)'}}>
          <ReceiptContainer>
          <ReceiptTop>
            <ReceiptTitle>
                PROUST
                <p>PICK</p>
            </ReceiptTitle>
            <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
            <ReceiptSubTitle>
                Eau Duelle
            </ReceiptSubTitle>
            <Explanation>
              <p>
                오듀엘르 
              </p>
              <span>
                #신비로운 바닐라 #스파이스 #달달함 #우디
              </span>
            </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
            <ReceiptContainer>
            <ReceiptTop>
              <ReceiptTitle>
                 PROUST
                 <p>PICK</p>
              </ReceiptTitle>
              <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
              <ReceiptSubTitle>
                 Eau Duelle
              </ReceiptSubTitle>
              <Explanation>
                <p>
                  오듀엘르 
                </p>
                <span>
                  #신비로운 바닐라 #스파이스 #달달함 #우디
                </span>
              </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
            <ReceiptContainer>
            <ReceiptTop>
              <ReceiptTitle>
                 PROUST
                 <p>PICK</p>
              </ReceiptTitle>
              <HorizontalLine/>
              <img
                src={perfume}
                alt="Base Character"
              />
              <ReceiptSubTitle>
                 Eau Duelle
              </ReceiptSubTitle>
              <Explanation>
                <p>
                  오듀엘르 
                </p>
                <span>
                  #신비로운 바닐라 #스파이스 #달달함 #우디
                </span>
              </Explanation>
            </ReceiptTop>
            <ReceiptBottom>
              <img
                src={barcode}
                alt="Base Character"
                style={{ margin: "20px 0 20px 0" }}
              />
            </ReceiptBottom>
            </ReceiptContainer>
        </BestContainer>
        <StyledLink to="/login">
            <button>회원가입하러 가기</button>
        </StyledLink>
        </>
        )}
    </FourthContainer>
  )
}
