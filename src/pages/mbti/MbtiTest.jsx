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

    {q: ['향수를 방금 뜯었는데 해야할 일이 생각났다면?'],
    a:[{type:'J', number:'A', text:'일단 케이스 정리를 하고 해야할 일을 시작한다'},
    {type:'P', number:'B',text:'해야할 일을 먼저 하고 케이스 정리는 나중으로 미룬다'}]},

    {q: ['내 향수를 맡은 친구가 향이 나랑 안 맞는 것 같다고 한다면?'],
    a:[{type:'T', number:'A', text:'나도 좀 느끼긴 했지만, 역시 바꿔야하나 고민한다.'},
    {type:'F', number:'B', text:'정말 나랑 잘 안 맞나..? 멘탈에 타격이 가기 시작한다.'}]},

    {q: ['친구랑 향수를 사서 스토리를 올리게 되었다면?'],
    a:[{type:'E', number:'A', text:'내가 스토리를 직접 만들고 친구들을 태그해서 올리는 것'},
    {type:'I', number:'B', text:'내가 태그 되어있는 친구 스토리를 공유하는 것'}]},

    {q: ['자고 일어났더니 향수가 하늘을 날고 있다'],
    a:[{type:'N', number:'A', text:'엇 향수가 하늘을 나네...비누 날아다니나? 아무튼 재밌네 ㅎㅎ'},
    {type:'S', number:'B', text:'..이게뭐지? 꿈인가? 생각하는데 시간이 걸린다'}]},

    {q: ['내가 더 하고 싶은 건'],
    a:[{type:'S', number:'A', text:'내 취향과 퍼센트를 기반으로 한 나만의 향 조합 찾기'},
    {type:'N', number:'B', text:'내가 보는 소설과 어울리는 향 만들기'}]},

    {q: ['친한 친구가 "나 힘들어..."라고 말하면'],
    a:[{type:'T', number:'A', text:'힘들어? 힘들 때 이거 먹으면 좋다던데... (기프티콘 전송)'},
    {type:'F', number:'B', text:'무슨 일 있어? 나한테 얘기해 봐. 내가 다 들어줄게'}]},

    {q: ['처음 보는 사람들이 모인 자리에서 내 향은'],
    a:[{type:'E', number:'A', text:'이야기를 주도하고 텐션감 유지하면서 상큼한 시트러스'},
    {type:'I', number:'B', text:'대답으로 상대의 이야기 흐름 유지하면서 잔잔한 우디'}]},

    {q: ['시향하러 가기로 친구랑 약속을 잡은 날 나는'],
    a:[{type:'P', number:'A', text:'향 맡고, 마음에 드는 향을 찾아서 사고 즐겁게 집에 간다'},
    {type:'J', number:'B', text:'가기 전부터 향 조사해두고 가서 차례차례 맡아보고 구매한다'}]},

    {q: ['아침에 향수를 뿌릴 때'],
    a:[{type:'J', number:'A', text:'차근차근 준비하고 싶어서 미리 뿌리는 시점을 정해두는 편'},
    {type:'P', number:'B', text:'나가기 전에 급하게 생각나서 뿌리고 가는 편'}]},

    {q: ['회사 동료가 어제 막 애인에게 선물받은 향수가 깨졌다고 할 때'],
    a:[{type:'F', number:'A', text:'애인에게 받은 선물이 깨져서 너무 속상하겠다…'},
    {type:'T', number:'B', text:'헉 그게 얼만데,, 엄청 아깝겠다…'}]},

    {q: ['멍때리다가 향을 맡았을때 나는'],
    a:[{type:'S', number:'A', text:'어디서 향수 뿌렸나? 주변을 둘러본다.'},
    {type:'N', number:'B', text:'이게 꽃향일까 풀향일까? 향 되게 좋다.. 생각이 많아진다'}]},

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