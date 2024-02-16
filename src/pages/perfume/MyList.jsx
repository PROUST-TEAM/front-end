import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import baseImage from "../../images/base_charac.png";
import perfume from "../../images/perfume.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";

const PerfimeListWrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const PerfumeListContent = styled.div`
  margin: 80px 40px 100px 40px;
`;
const ListSpan = styled.div`
  font-size: 200px;
  color: #fefdfc;
  font-family: Prompt_ExtraBold;
  font-weight: 700;
`;
const MySpan = styled.span`
  font-size: 120px;
  color: #7d7d7d;
  font-family: Prompt_ExtraBold;
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
`;

const FilterItem = styled.div`
  border: 2px solid #fefdfc;
  border-radius: 100px;
  padding: 15px 40px;
  margin: 0 15px;
  display: inline-block;
  font-size: 27px;
  color: #fefdfc;
  font-family: Pretendard_Bold;
  cursor: pointer;

  // active의 prop 이 ture 일때 클릭된 스타일 적용
  ${(props) =>
    props.active &&
    css`
      color: #6bff94;
      border: 2px solid #6bff94;
    `}
`;

const Perfumes = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 75px;
  width: 960px;
  flex-wrap: wrap;
`;

const Perfume = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-width: 300px;
  max-width: 300px;
  min-height: 381px;
  max-height: 381px;
  margin: 10px 10px;
  > div > p {
    font-size: 20px;
    color: #282727;
    font-family: Pretendard_ExtraBold;
    margin-top: -25px;
    padding: 0 10px 0 10px;
    margin-bottom: 20px;
  }

  > div > img {
    margin-top: -50px;
    width: 240px;
    height: 338px;
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

const LoginMessage = styled.div`
  text-align: center;
  font-size: 50px;
  color: white;
  font-family: Pretendard_ExtraBold;
  margin-top: -100px;
`;

export default function MyList() {
  const [isHeartFilled, setHeartFilled] = useState(true);
  const [activeFilters, setActiveFilters] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/perfumeList`, {
          params: {
            Keyword: activeFilters,
            // 필요에 따라 다른 쿼리 매개변수를 추가할 수 있습니다.
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("향수 리스트:", response.data.result);
        setResponse(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // 초기 마운트 시에도 데이터를 가져오도록 호출
  }, [activeFilters]); // activeFilters나 token이 변경될 때마다 실행

  const onFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
      console.log(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
      console.log([...activeFilters, filter]);
    }
  };

  const onClickHeart = async (perfume) => {
    console.log(perfume.name);
    axios
      .patch(`${apiUrl}/${perfume.name}/likePerfumes`, {
        params: {
          Name: perfume.name,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      })
      .then((response) => {
        // 서버 응답 확인
        console.log("향수 찜: ", response.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <PerfimeListWrap>
      <PerfumeListContent>
        <MySpan>MY</MySpan>
        <br />
        <ListSpan>LIST</ListSpan>
        <BaseImage>
          <img src={baseImage} alt="Base Character" />
        </BaseImage>

        {token ? (
          <Filter>
            {["우디", "시트러스", "프루티", "머스크", "플로럴"].map(
              (filter) => (
                <FilterItem
                  key={filter}
                  onClick={() => onFilterClick(filter)}
                  active={activeFilters.includes(filter)}
                >
                  {filter}
                </FilterItem>
              )
            )}
          </Filter>
        ) : (
          <LoginMessage>
            <p>로그인 후 나만의 리스트를 확인해보세요</p>
          </LoginMessage>
        )}

        <Perfumes>
          {response &&
            response.perfumeList_contentsData &&
            response.perfumeList_contentsData.map((perfume, index) => (
              <Link
                to="/detail"
                state={{ name: perfume.name }}
                style={{ textDecoration: "none" }}
              >
                <Perfume>
                  <Heart
                    onClick={(event) => {
                      console.log(response);
                      onClickHeart(perfume); // 하트 클릭 시 동작할 함수
                      console.log(perfume.name);
                      event.preventDefault();
                    }}
                  >
                    {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                  </Heart>
                  <div>
                    <img
                      src={`https://proust-img-s3.s3.ap-northeast-2.amazonaws.com/${perfume.imageUrl}`}
                      alt={perfume.name}
                    />
                  </div>

                  <div>
                    <p>{perfume.name}</p>
                  </div>
                </Perfume>
              </Link>
            ))}
        </Perfumes>
      </PerfumeListContent>
    </PerfimeListWrap>
  );
}
