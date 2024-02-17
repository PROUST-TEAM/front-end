import React, { useState, useEffect } from "react";
import styled from "styled-components";
import topImage from "../../images/top_charac.png";
import searchImage from "../../images/search_img.png";
import miniTopImg from "../../images/mini_top_img.png";
import perfume from "../../images/perfume.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import video1 from "../../images/main_ani.webm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RootWrap = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 30px;
  margin-bottom: 50px;
`;

const Image = styled.div`
  > img {
    width: 803px;
    height: 452px;
  }
  z-index: 0; //이미지가 Title 위로 가도록
`;

const Title = styled.div`
  text-align: center; // 텍스트 가운데 정렬
  font-size: 150px;
  color: white;

  font-family: "Prompt_ExtraBold", sans-serif;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -135%);
  white-space: nowrap;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateY(40%);
  height: 150px;
  border-left: 2px solid #6bff94;
`;

const Circle = styled.div`
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-45%, -10%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

const Circle2 = styled.div`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translate(-45%, -50%);
  background-color: #6bff94;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6bff94;
  border-radius: 100px;

  font-family: "Pretendard_SemiBold", sans-serif;
  font-size: 25px;
  color: white;
  background-color: black;

  padding: 10px;
  padding-left: 30px;
  width: 732px;
  height: 40px;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #f3f3f3;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: "Pretendard_SemiBold", sans-serif;
  background-color: black;
  outline: none;
  border: none;
  color: white;
  width: 680px;
`;

export const SearchButton = styled(Link)`
  > img {
    width: 46px;
    height: 46px;
  }

  margin-top: 5px;
  padding-right: 20px;
  text-decoration: none; // 링크에 기본 스타일 제거
`;

export const SearchContainer2 = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #6bff94;
  border-radius: 100px 100px 100px 0px;

  font-family: "Pretendard_Bold", sans-serif;
  font-size: 30px;
  color: #6bff94;
  background-color: #393939;

  padding: 10px;
  padding-left: 30px;
  width: 640px;
  height: 50px;

  position: absolute;
  top: 155%;
  left: 50%;
  transform: translate(-50%, -50%);

  > p {
    width: 100%;
    color: #6bff94;
    text-align: center;
    margin-right: 17px;
  }

  > img {
    width: 243px;
    position: absolute;
    top: 25%;
    left: -13%;
    transform: translate(-50%, -50%);
  }
`;

const ListWrap = styled.div`
  position: relative;
  margin-left: 20px;
  top: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Perfume = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 280px;
  min-width: 280px;
  height: 390px;
  margin: 10px 10px;
  > div > p {
    font-size: 20px;
    padding: 15px;
    color: #282727;
    font-family: Pretendard_ExtraBold;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  > div > img {
    margin-top: -10px;
  }
`;

const Heart = styled.div`
  display: inline;
  > svg {
    color: #282727;
    width: 31px;
    height: 28px;
    margin-top: 30px;
    margin-right: -200px;
  }
`;

const Perfumes = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 40px;
  width: 960px;
  flex-wrap: wrap;
`;

const LoaderContainer = styled.div`
  user-select: none;
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > video {
    //width: 803px;
    height: 500px;  
    background-color: trnasparent;
  }
`;

const LoaderMessage = styled.div`
  font-family: Pretendard_ExtraBold;
  font-size: 40px;
  z-index: 1; //text가 이미지 위로 가게
  color: #6BFF94;
  margin-top: -70px;

  >p{
    margin-top: 10px;
    font-family: Pretendard_ExtraBold;
    font-size: 30px;
    z-index: 1; //text가 이미지 위로 가게
    color: white;
  }
`;

export default function Search() {
  const [isHeartFilled, setHeartFilled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState([]);
  const [isLiked,setLiked] = useState([]);

  //const [hresponse, sethResponse] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  //const [perfumeNames, setPerfumeNames] = useState([]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const location = useLocation();

  // 특정 기호를 16진수로 변환하는 함수
  const convertToHex = (str) => {
    return Array.from(str).map(char => char.charCodeAt(0).toString(16)).join('');
  };

  useEffect(() => {
    const searchData = location.state && location.state.searchData;
    console.log("Search Data:", searchData);
  
    const fetchData = async () => {
      try {
        if (searchData && searchData.result) {
          const requests = searchData.result.map(async (item) => {
            console.log("Current item name:", item.name);

            // 기호가 포함되어 있다면 16진수로 변환
          const sanitizedName = item.name.includes('/') ? convertToHex(item.name) : item.name;

          if(token){
            const response = await axios.get(`${apiUrl}/${sanitizedName}/getPerfumes`);
            // 찜 여부 확인하기 (토큰이 있는 경우에만)
            const isLiked = token ? await checkPerfumeLiked(item.name) : false;
            return { ...response.data.result, isLiked };
          }
          });
    
          const results = await Promise.all(requests);
          console.log("향수 리스트:", results);
          setResponse(results);
          //console.log(response);
        }
        else{
          window.location.href = '/nonSearch';
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData(); // 초기 마운트 시에도 데이터를 가져오도록 호출
    setSearchText('');
  }, [location]);

  const checkPerfumeLiked = async (perfumeName) => {
    try {
      const sanitizedName = perfumeName.includes('/') ? convertToHex(perfumeName) : perfumeName;
  
      const hresponse = await axios.get(`${apiUrl}/${encodeURIComponent(sanitizedName)}/likePerfumes`, {
        params: {
          Name: encodeURIComponent(sanitizedName),
        },
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      });
  
      return hresponse.data.result.status === "A";
    } catch (error) {
      console.error("Error checking perfume liked status:", error);
      return false;
    }
  };

    
  const handleSearchButtonClick = async (event) => {
    try {
      setLoading(true); // 검색 버튼 클릭 시 로딩 상태를 true로 설정
  
      if (searchText.trim() !== '') {
        const response = await axios.post(`${apiUrl}/ai/search`, {
          search: searchText,
        });
  
        console.log("서버 응답:", response.data);

        if (response.data.isSuccess && response.data.result !== null) {
          navigate('/search', { state: { searchData: response.data }});
        } else {
          window.location.href = '/nonSearch';
        }
      } else {
        window.location.href = '/nonSearch';
      }
    } catch (error) {
      if ([429, 504].includes(error.response?.status)) {
        window.location.href = '/nonSearch';
      }
    } finally {
      setLoading(false); // 검색 작업이 완료되면 로딩 상태를 false로 설정
    }
  };
  
  
  const onClickHeart = async (perfume, index) => {
    console.log(perfume.name);
    if (token) {
      try {
        const sanitizedName = perfume.name.includes('/') ? convertToHex(perfume.name) : perfume.name;

        const hresponse = await axios.patch(
          `${apiUrl}/${sanitizedName}/likePerfumes`,
          { Name: perfume.name },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 해당 향수에 대한 찜 여부 확인
        const isLiked = hresponse.data.result.status === "A";

        // response 배열을 복제하고 변경된 향수에 대한 isLiked 상태를 업데이트
        setResponse((prevResponse) =>
          prevResponse.map((item, i) =>
            i === index ? { ...item, isLiked } : item
          )
        );
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // 토큰이 없는 경우에는 모든 향수에 대한 isLiked를 false로 설정
      setResponse((prevResponse) =>
      prevResponse.map((item) => ({ ...item, isLiked: false }))
      );
      navigate('/login');
    }
  };

  return (
    <RootWrap>
      {loading && (
        <LoaderContainer>
          <video autoPlay loop muted>
            <source src={video1} type='video/webm' />
          </video>
          <LoaderMessage>
            Loading 중...
            <p>
              조금만 기다려줘!
            </p>
          </LoaderMessage>
        </LoaderContainer>
      )}

    {!loading && (
      <>
      <SearchWrap>
        <Title>PROUST</Title>
        <Image>
          <img src={topImage} alt="Top Character" />
        </Image>
        <SearchContainer>
          <Input
            type="text"
            placeholder="향수? 나에게 다 물어봐"
            value={searchText}
            onChange={handleInputChange}
          />
          <SearchButton to="#" onClick={handleSearchButtonClick}>
            <img src={searchImage} alt="SearchImg" />
          </SearchButton>
        </SearchContainer>
        <Circle />
        <VerticalLine />
        <Circle2 />
        <SearchContainer2>
          <img src={miniTopImg} alt="miniTop Character" />
          <p>"내가 너의 취향에 맞는 향수를 찾아왔어"</p>
        </SearchContainer2>
      </SearchWrap>
      <ListWrap>
      <Perfumes>
        {response &&
          response.map((perfumeGroup, index) => (
            <React.Fragment key={index}>
              {perfumeGroup.perfume_contentsData.map((perfume, perfumeIndex) => (
                <Link
                  to="/detail"
                  state={{ name: perfume.name }}
                  style={{ textDecoration: "none" }}
                  key={perfumeIndex}
                >
                  <Perfume>
                      <Heart
                          onClick={(event) => {
                          onClickHeart(convertToHex(perfume.name), perfumeIndex);
                          event.preventDefault();
                        }}
                      >
                      {perfume.isLiked ? <FaHeart /> : <FaRegHeart />}
                          </Heart>
                    <div>
                      <img
                        src={`https://proust-img-s3.s3.ap-northeast-2.amazonaws.com/${perfume.imageUrl}`}
                        alt={perfume.name}
                        style={{ width: "200px", height: "250px" }}
                      />
                    </div>
                    <div>
                      <p>{perfume.name}</p>
                    </div>
                  </Perfume>
                </Link>
              ))}
            </React.Fragment>
          ))}
      </Perfumes>
      </ListWrap>
      </>
    )}
    </RootWrap>
  );
}
