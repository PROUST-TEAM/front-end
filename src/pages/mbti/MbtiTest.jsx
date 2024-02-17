import { React,useState } from "react";
import styled from "styled-components";
import middleImg from "../../images/sec_charac.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
//import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import statusImg from "../../images/Shape.png";
//import numberImg from "../../images/Number0.png";
//import datas from "./json/questions.json";

const MbtiTestWrap = styled.div`
  margin-top: 140px;
`;
const MbtiTestTopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MbtiTestTopContent = styled.div``;

const Question = styled.div`
user-select: none;
  display: inline-block;
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fefdfc;
    font-family: Pretendard_Bold;
    font-size: 30px;
    width: 600px;
    height: 100px;
    margin-top: -20px;
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;
const Options = styled.div`
user-select: none;
  text-align: start;
  > div {
    background-color: #ffffff;
    color: #282727;
    font-size: 24px;
    margin-bottom: 20px;
    border-radius: 10px;
    &:hover {
      background-color: #48FF7B;
    }
  }
`;
const Option = styled.div`
user-select: none;
  padding: 20px 20px 20px 20px;

  > p {
    color: #282727;
    font-size: 24px;
    font-family: Pretendard_Medium;

    > span {
      color: #282727;
      font-size: 30px;
      font-family: Pretendard_Black;
      margin-right: 20px;
    }
  }
`;

const MbtiTestBottomWrap = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;

  >p{
    user-select: none;
    font-family: "Pretendard_ExtraBold", sans-serif;
    color: white;
    font-size: 20px;
  }
`;
const Button = styled.div`
  background-color: white;
  border-radius: 100px;
  padding: 10px 20px 10px 20px;
  white-space: nowrap;
   
  font-family: "Pretendard_ExtraBold", sans-serif;
  font-size: 20px;
  &:hover {
    background-color: #48FF7B;
  }
`;
const Bar = styled.div`
  display: flex;
  width: 550px;
`;
const Status = styled.div`
  position: absolute;
  top: 737px;
  left: 50%;
  transform: translate(-1050%, -50%);
  //left: ${({ page }) => `calc(${20 + page * 5.2}%)`};
  transition: left 0.5s ease-in-out;

  > span{
    position: absolute;
    left:90%;
    transform: translate(-200%, -234%);
    font-family: "Pretendard_ExtraBold", sans-serif;
    font-size: 15px;
    color: black;
  }
`;

const Circle2 = styled.div`
  background-color: #fefdfc;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`;

const StyledHr = styled.hr`
  border: 0;
  height: 4px;
  width: 550px;
  background: #f3f3f3;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ page }) => `${(page / 12) * 100}%`};
    height: 100%;
    background: #48FF7B;
    transition: width 0.5s ease-in-out;
  }
`;

const ImagesContainer = styled.div``;
const StatusImg = styled.img`
  top: 0%;
  left: 50%;
  transform: translate(-13%, -20%);
`;

// const NumberImg = styled.img`
//   position: absolute;
//   //   background-color: red;
//   width: 8px;
//   top: 10px;
//   left: 50%;
//   transform: translate(-98%, -50%); /* 이미지의 중심을 화면의 중심에 위치시킴 */
// `;

// const iconWidth = "30px";

export default function MbtiTest() {

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  
  const questionList = [
    {q: ['나를 비유한다면?'],
    a:[{type:'E', number:'A', text:'어디에서도 눈에 띄는 매력적인 향기'},
    {type:'I', number:'B', text:'존재감은 없지만 시간 지나서 떠올리는 기분좋은 향기'}]},

    {q: ['집안일이랑 해야할 일이 있으면'],
    a:[{type:'J', number:'A', text:'일단 먼저 집안일을 하고 해야할 일을 시작한다'},
    {type:'P', number:'B',text:'해야할 일을 먼저 하고 집안일은 나중으로 미룬다'}]},

    {q: ['프로젝트 같이 했던 팀원이 나랑 안 맞는 것 같다고 팀을 바꿔달라고 한다면'],
    a:[{type:'T', number:'A', text:'나도 좀 느끼긴 했지만, 무슨 이유 때문인지 궁금하다'},
    {type:'F', number:'B', text:'혹시 내가 뭐 말실수했나..? 멘탈에 타격이 가기 시작한다'}]},

    {q: ['친구랑 SNS 스토리를 올려야 한다면 내 역할은'],
    a:[{type:'E', number:'A', text:'내가 주인공이 되어 스토리를 직접 만들고 친구들을 태그해서 올리는 것'},
    {type:'I', number:'B', text:'내가 태그 되어있는 친구 스토리를 공유하는 것'}]},

    {q: ['자고 일어났더니 돼지가 하늘을 날고 있다'],
    a:[{type:'N', number:'A', text:'엇 돼지가 하늘을 나네...토끼도 날아다니나? 아무튼 재밌네 ㅎㅎ'},
    {type:'S', number:'B', text:'..이게뭐지? 꿈인가? 생각하는데 시간이 걸린다'}]},

    {q: ['내가 더 하고 싶은 건'],
    a:[{type:'S', number:'A', text:'팩트와 통계를 기반으로 한 나만의 연구 논문 쓰기'},
    {type:'N', number:'B', text:'빵빵한 세계관과 캐릭터, 소설 창작하기'}]},

    {q: ['친한 친구가 "나 힘들어..."라고 말하면'],
    a:[{type:'T', number:'A', text:'힘들어? 힘들 때 이거 먹으면 좋다던데... (기프티콘 전송)'},
    {type:'F', number:'B', text:'무슨 일 있어? 나한테 얘기해 봐. 내가 다 들어줄게'}]},

    {q: ['처음 보는 사람들이 모인 자리에서 내 역할은'],
    a:[{type:'E', number:'A', text:'이야기를 주도하고 분위기 텐션감 유지하면서 광대하기'},
    {type:'I', number:'B', text:'대답으로 상대의 이야기 흐름 유지하면서 시청자하기'}]},

    {q: ['친구랑 만날 때 나는'],
    a:[{type:'P', number:'A', text:'시간이랑 장소만 정해두고 그날 끌리는 걸 선택하고 싶다'},
    {type:'J', number:'B', text:'브레이크타임 확인부터 동선까지, 미리 세팅해 둔 일정을 즐기고 싶다'}]},

    {q: ['프로젝트를 할 때'],
    a:[{type:'J', number:'A', text:'차근차근 준비하고 싶어서 미리 끝내두는 편'},
    {type:'P', number:'B', text:'마감 직전에 머리가 잘 돌아가는 편'}]},

    {q: ['주로 눈물이 나는 순간은'],
    a:[{type:'F', number:'A', text:'수도꼭지인가 싶을 정도로 자주 눈물이 나서 어느 포인트인지 가늠이 안 된다'},
    {type:'T', number:'B', text:'역대급 슬픈 콘텐츠를 보거나 억울해서 화가 날 때였던 것 같다'}]},

    {q: ['내가 자주 듣는 말은'],
    a:[{type:'S', number:'A', text:'너 어떻게 그런 생각을 해?'},
    {type:'N', number:'B', text:'이런 상상을 안 해봤다고?'}]},

    // {q: ['MBTI TEST가 끝났어! 너의 성향에 맞는 향수 보러갈래?'],
    // a:[{type:'', text:'MBTI 결과 보러가기'}]}
  ]

  const [mbtiList, setMbtiList] = useState([
    {name:'I', count:0}, {name:'E', count:0}, {name:'N', count:0},{name:'S', count:0},
    {name:'T', count:0}, {name:'F', count:0}, {name:'P', count:0},{name:'J', count:0}
  ])

  const handleCkAnswer = (type, idx) => {
    console.log(mbtiList);
    console.log(`현재 페이지: ${page}`);

    let ls = mbtiList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }
  
    setMbtiList(ls);
    
    if (page + 1 === questionList.length) {
      // return (
      //     {/* <Link >
      //       <Button>내 성향에 맞는 향수 결과 보러가기</Button>
      //     </Link> */}
      // );
      navigate('/mbti', { state: { mbtiList: ls } });
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  return (
    <MbtiTestWrap>
      <div style={{}}>
        <MbtiTestTopWrap>
          <MbtiTestTopContent>
            <div>
              <img
                src={middleImg}
                alt="Middle Character"
                style={{ width: "430px", height: "250px" }}
              />
            </div>

            {questionList.map((question, idx) => (
              <div key={idx} style={{ display: page === idx ? "block" : "none" }}>
                <Question>
                  <p>{question.q}</p>
                </Question>
                <Options>
                  {question.a.map((option, optionIdx) => (
                    <Option key={optionIdx} onClick={()=> handleCkAnswer(option.type,optionIdx)}>
                      <p>
                        <span>{option.number}</span>
                        {option.text}
                      </p>
                    </Option>
                  ))}
                </Options>
              </div>
            ))}
          </MbtiTestTopContent>
        </MbtiTestTopWrap>
        <MbtiTestBottomWrap>
          <p style={{marginRight :"30px"}}>
            {page}
          </p>
        {/* <Button
          style={{ marginRight: "150px" }}
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
        >
          <img
            src={arrowLeft}
            alt="arrowLeft"
            style={{ width: "58px", height: "20px" }}
          />
          뒤로
        </Button> */}
        <Bar>
          {/* <Status page={page}>
            <ImagesContainer>
              <StatusImg src={statusImg} alt="Status" />
            </ImagesContainer>
            <span>{page+1}</span>
            <Circle2 />
          </Status> */}
          <StyledHr page={page} />
        </Bar>
        <p style={{marginLeft :"30px"}}>
          12
        </p>
          {/* style={{ marginLeft: "150px" }}
          onClick={() => setPage((prevPage) => Math.min(prevPage + 1, questionList.length - 1))}
        > */}
          
          {/* <img
            src={arrowRight}
            alt="arrowRight"
            style={{ width: "58px", height: "20px" }}
          /> */}
        {/* </Button> */}
      </MbtiTestBottomWrap>
      </div>
    </MbtiTestWrap>
  );
}