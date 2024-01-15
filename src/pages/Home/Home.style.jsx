import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";

export const HomeContainer= styled.div`
  height: 4589px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto; /* 화면 전체 높이를 차지하도록 설정 */
  flex-direction: column;

  position: relative;
  padding-top: 30px
`;

export const Image = styled.div`
  > img {
    width: 803px;
    height: 452px;
  }
  z-index: 1; //이미지가 Title 위로 가도록
`;

export const Title= styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 150px; 
  color: white;

  font-family: 'Prompt', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -135%);
  white-space: nowrap;
`;

export const SubTitle = styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 35px; 
  color: white;
  white-space: pre-line; // 줄바꿈 활성화

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 290%);
  white-space: nowrap;
`;

export const ColoredText = styled.span`
  color: #6BFF94 ; 
  white-space: nowrap;
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateY(40%);
  height: 150px;
  border-left: 2px solid #6BFF94 ; 
`;

export const Circle = styled.div`
  position: absolute;
  top: 145%;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6BFF94;
  border-radius: 50%;
  width: 15px; 
  height: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6BFF94;
  border-radius: 100px;

  font-family: 'Pretendard_SemiBold', sans-serif;
  font-size: 25px;
  color: white;

  padding: 10px; 
  padding-left: 30px;
  width: 732px;
  height: 40px;

  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -30%);

  color: #F3F3F3 ; 
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: 'Pretendard_SemiBold', sans-serif;
  background-color: black;
  outline: none;
  border: none;
  color: white;
  width: 680px;
`;

export const SearchButton = styled.div`
  > img {
    width: 46px;
    height: 46px;
  }
 
  padding-right: 20px;
`;

export const KeyWordContainer= styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  font-family: 'Pretendard_Bold', sans-serif;
  font-size: 35px;

  flex-direction: column;

  position: relative;
  top: 13%;
`;

export const KeyWordTitle = styled.p`
  color: #6BFF94;
  font-family: 'Pretendard_ExtraBold', sans-serif;
  font-size: 60px;
  white-space: nowrap;
`;

export const KeyWordDes = styled.p`
  color: white;
  font-family: 'Pretendard_Bold', sans-serif;
  padding-top: 20px;
  font-size: 35px;
  margin-bottom: 65px;
  white-space: nowrap;
`;

export const KeyButton = styled.div`
  padding: 15px;
  white-space: nowrap;
  button{
    background-color: black;
    color: white;

    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 27px;

    border: 2px solid white;
    border-radius: 100px;
    padding: 15px 40px;

    margin-right: 15px;
    margin-left: 15px;
  }
`;
