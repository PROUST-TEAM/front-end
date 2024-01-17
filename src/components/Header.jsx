import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import topImage from "../images/top_charac.png";
import loginImage from "../images/login_img.png";
import searchBtnImage from "../images/search_btn.png";
import { useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: black;
    padding: 20px;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  white-space: nowrap;

  ul{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  li{
    margin-left: 20px;
    padding: 0;
  }

  .header-nav-item{
    text-decoration: none;
    color: #ABA8A5;
    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 14px;
  }

  .header-nav-item.active {
    font-family: 'Pretendard_ExtraBold', sans-serif;
    color: white; /* Home이 활성화된 경우의 텍스트 색상 */
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  white-space: nowrap;

  .header-nav-item{
    text-decoration: none;
    color: white;
    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 14px;
  }
`;

const SearchButton = styled.div`
  align-items: center;
  justify-content: center;

  > img{
    margin-right: 15px;
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

  > p{
    text-decoration: none;
    color: white;
    font-family: 'Pretendard_Bold', sans-serif;
    font-size: 14px;
  }

  > img{
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
`;

const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; 
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 310px;
  background-color: #262626;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  > img{
    height: 187px;
    align-self: center;
  }
`;

const SearchContainer = styled.div`
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
  color: #F3F3F3 ; 
`;

const Input = styled.input`
  padding: 10px;
  font-size: 25px;
  font-family: 'Pretendard_SemiBold', sans-serif;
  background-color: #262626;
  outline: none;
  border: none;
  color: white;
  width: 680px;
`;


export default function Header() {

  const location = useLocation();
  const isHome = location.pathname === '/home';
  const isList = location.pathname === '/myList';
  const isColumn = location.pathname === '/column';
  const isLocation = location.pathname === '/location';
  const isTest = location.pathname === '/mbtiTest';

  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false);

  const toggleSearchPanel = () => {
    setSearchPanelVisible(!isSearchPanelVisible);
  };

  return (
    <>
    <HeaderContainer>
        <HeaderLeft>
            <ul>
                <li>
                  <Link className={`header-nav-item ${isHome ? 'active' : ''}`} to='/home'>
                        HOME
                    </Link>
                </li>
                <li>
                  <Link className={`header-nav-item ${isList ? 'active' : ''}`} to='/myList'>
                      MY LIST
                  </Link>
                </li>
                <li>
                <Link className={`header-nav-item ${isColumn ? 'active' : ''}`} to='/column'>
                        COLUMN
                    </Link>
                </li>
                <li>
                  <Link className={`header-nav-item ${isLocation ? 'active' : ''}`} to='/location'>
                    LOCATION
                  </Link>
                </li>
                <li>
                  <Link className={`header-nav-item ${isTest ? 'active' : ''}`} to='/mbtiTest'>
                    MBTI TEST
                  </Link>
                </li>
            </ul>
        </HeaderLeft>
        <HeaderRight>
          <SearchButton onClick={toggleSearchPanel}>
            <img src= {searchBtnImage} alt= "SearchImagee"/>
          </SearchButton>
          <StyledLink to="/login">
            <p>LOGIN</p>
            <img src={loginImage} alt= "LoginImage"/>
          </StyledLink>
        </HeaderRight>
    </HeaderContainer>
    <SearchPanel isVisible={isSearchPanelVisible}>
      <img src={topImage} alt="Top Character" />
      <SearchContainer>
        <Input 
          type="text"
          placeholder= "향수? 나에게 다 물어봐"
          />
        <SearchButton>
          <img src={searchBtnImage} alt="SearchImg" />
        </SearchButton> 
        </SearchContainer>
    </SearchPanel>  
    </>
  )
}


