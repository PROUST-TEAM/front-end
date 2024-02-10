import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import topImage from "../images/top_charac.png";
import loginImage from "../images/login_img.png";
import searchBtnImage from "../images/search_btn.png";
import closeBtnImage from "../images/close_btn.png";
import menuImage from "../images/menu.png";

import smileImage from "../images/smile.png";
import GearImage from "../images/GearSix.png";
import SignOutImage from "../images/signout.png";
//import { useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3;
`;

const HeaderLeft = styled.div`
  display: flex;
  white-space: nowrap;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  li {
    margin-left: 20px;
    padding: 0;
  }

  .header-nav-item {
    text-decoration: none;
    color: #aba8a5;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 20px;
  }

  .header-nav-item.active {
    font-family: "Pretendard_ExtraBold", sans-serif;
    color: white; /* Home이 활성화된 경우의 텍스트 색상 */
  }

  .header-nav-item:hover {
    font-family: "Pretendard_ExtraBold", sans-serif;
    color: white; /* Home이 활성화된 경우의 텍스트 색상 */
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed; /* 수정된 부분 */
  right:0;


  .header-nav-item {
    text-decoration: none;
    color: white;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 20px;
  }

  > img{
    width: 24px;
    height: 24px;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
`;

const SearchButton = styled.div`
  align-items: center;
  justify-content: center;

  > img {
    width: 40px;
    height: 40px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: inherit;
  white-space: nowrap;
  margin-left: 20px;

  > p {
    text-decoration: none;
    color: white;
    font-family: "Pretendard_Bold", sans-serif;
    font-size: 14px;
  }

  > img {
    margin-left: 5px;
    margin-bottom: 4px;
    width: 20px;
    height: 20px;
  }
`;

const SearchPanel = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  z-index: 3;
  width: 100%;
  height: 310px;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  > img {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 15px;
    height: 187px;
    z-index: 3;
  }
`;

const CloseButton = styled.div`
  > img{
    position: absolute;
    margin-right: 15px;
    width: 20px;
    height: 20px;
    z-index: 2;

    position: absolute;
    top: 15%;
    left: 95%;
    transform: translate(-10%, -50%);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1.5px solid #6bff94;
  border-radius: 100px;
  font-family: "Pretendard_SemiBold", sans-serif;
  font-size: 25px;
  color: white;
  padding: 10px;
  padding-left: 30px;

  width: 732px;
  height: 40px;
  color: #f3f3f3;
  z-index: 2;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: "Pretendard_SemiBold", sans-serif;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  width: 680px;
  z-index: 2;
`;

const BlurredBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 310px;
  background-size: cover;
  background-color: #262626;
  opacity: 0.95;
  z-index: 1;
`;

const DropdownContainer = styled.div`
  z-index: 2;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: 150px;
  top: 140%;
  right: 0;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;

const DropdownItem = styled.div`
  height: 45px;
  color: #282727;
  font-family: 'Pretendard_SemiBold', sans-serif;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: #D9D9D9;
    // border-radius: 10px;
  }
  >img{
    width: 24px;
    height: 24px;
    margin-right:5px; 
    margin-left: 15px;
  }
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  /* 로그인되지 않은 상태일 때 모든 가장자리의 radius를 추가 */
  &:only-child {
    border-radius: 10px;
  }
`;


export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isHome = location.pathname === '/home';
  const isList = location.pathname === '/myList';
  const isColumn = location.pathname === '/column';
  const isLocation = location.pathname === '/location';
  const isTest = location.pathname === '/mbtiTest';
  const isLogin = location.pathname === "/login";
  const isMyPage = location.pathname === "/myPage";
  const isCharacter = location.pathname === '/character';

  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false);

  useEffect(() => {
    // Close the SearchPanel when the location changes
    closeSearchPanel();
  }, [location.pathname]);

  const openSearchPanel = () => {
    setSearchPanelVisible(true);
  };

  const closeSearchPanel = () => {
    setSearchPanelVisible(false);
  };

  // ... (rest of the code)

  const handleNavLinkClick = (path) => {
    // SearchPanel을 닫고 지정된 경로로 이동합니다.
    closeSearchPanel();
    navigate(path);
  };

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // 검색어가 비어있지 않은 경우에만 링크로 이동
    if (searchText.trim() !== '') {
      // 검색 결과 페이지로 이동
      // 예시로 "/search" 경로를 사용했습니다.
      // 실제 사용하고자 하는 경로로 변경해주세요.
      window.location.href = `/search`;
    } else {
      window.location.href = '/nonSearch';
    }
  };

  // 드롭다운 관련 코드_추후에 API 연결하면 달라질 예정
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close the dropdown when the location changes
    setDropdownVisible(false);
  }, [location.pathname]);

  // 로그인 상태 관리
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <ul>
            <li>
              <Link
                className={`header-nav-item ${isHome ? "active" : ""}`}
                to="/home"
                onClick={() => handleNavLinkClick("/home")}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={`header-nav-item ${isList ? "active" : ""}`}
                to="/myList"
                onClick={() => handleNavLinkClick("/myList")}
              >
                MY LIST
              </Link>
            </li>
            <li>
              <Link
                className={`header-nav-item ${isColumn ? "active" : ""}`}
                to="/column"
                onClick={() => handleNavLinkClick("/column")}
              >
                COLUMN
              </Link>
            </li>
            <li>
              <Link
                className={`header-nav-item ${isLocation ? "active" : ""}`}
                to="/location"
                onClick={() => handleNavLinkClick("/location")}
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                className={`header-nav-item ${isTest ? "active" : ""}`}
                to="/mbtiMain"
                onClick={() => handleNavLinkClick("/mbtiMain")}
              >
                MBTI TEST
              </Link>
            </li>
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <SearchButton onClick={openSearchPanel}>
            <img src= {searchBtnImage} alt= "SearchImagee"/>
          </SearchButton>

          {/* 로그인이 되었을 때의 Header  */}
          {isLoggedIn ? (
            <>
          <StyledLink
            className={`header-nav-item ${isMyPage ? "active" : ""}`}
            to="/myPage"
            onClick={() => handleNavLinkClick("/myPage")}
          >
            MY PAGE
            <img src={loginImage} alt="LoginImage" />
          </StyledLink>
          
          <div onClick={handleMenuClick} style={{ position: 'relative' }} ref={dropdownRef}>
          <img
            style={{width:"24px", height: "24px", marginLeft: "20px"}}
            src={menuImage}
            alt="MenuImage"
          />
          {isDropdownVisible && (
            <DropdownContainer isVisible={isDropdownVisible}>
              <DropdownItem
                to='/character'
                onClick={() => handleNavLinkClick('/character')}>
                <img src={smileImage} alt= "Smile"/>
                캐릭터 설명
              </DropdownItem>
              <DropdownItem>
                <img src={GearImage} alt= "Gear"/>
                설정
              </DropdownItem>
              <DropdownItem>
                <img style={{marginLeft:"20px",width: "16.5px", height:"18px"}} src={SignOutImage} alt= "SignOut"/>  
                로그아웃
              </DropdownItem>
            </DropdownContainer>
          )}
          </div>
          </>
          ) : (
            // 로그인이 되지 않았을 때의 Header 
            <>
          <StyledLink
            className={`header-nav-item ${isLogin ? "active" : ""}`}
            to="/login"
            onClick={() => handleNavLinkClick("/login")}
          >
            LOGIN
            <img src={loginImage} alt="LoginImage" />
          </StyledLink>
          <div onClick={handleMenuClick} style={{ position: 'relative' }} ref={dropdownRef}>
          <img
            style={{width:"24px", height: "24px", marginLeft: "20px"}}
            src={menuImage}
            alt="MenuImage"
          />
          {isDropdownVisible && (
            <DropdownContainer isVisible={isDropdownVisible}>
              <DropdownItem to='/character'
                  onClick={() => handleNavLinkClick('/character')}>
                <img src={smileImage} alt= "Smile"/>
                캐릭터 설명
              </DropdownItem>
            </DropdownContainer>
          )}
          </div>
          </>
          )}
        </HeaderRight>
      </HeaderContainer>
      <SearchPanel isVisible={isSearchPanelVisible}>
        <CloseButton onClick={closeSearchPanel}>
          <img src={closeBtnImage} alt="CloseButton" />
        </CloseButton>
        <BlurredBackground />
        <img src={topImage} alt="Top Character" />
        <SearchContainer>
          <Input
            type="text"
            placeholder="향수? 나에게 다 물어봐"
            value={searchText}
            onChange={handleInputChange}
          />
          <SearchButton to="#" onClick={handleSearchButtonClick}>
            <img src={searchBtnImage} alt="SearchImg" />
          </SearchButton>
        </SearchContainer>
      </SearchPanel>
    </>
  );
}
