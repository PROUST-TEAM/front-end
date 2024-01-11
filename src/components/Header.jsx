import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: black;
    padding: 20px;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;

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
    color: white;
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  margin-right: 20px;

  .header-nav-item{
    text-decoration: none;
    color: white;
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
`;


export default function Header() {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <ul>
                <li>
                    <Link className='header-nav-item' to='home'>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className='header-nav-item' to='myList'>
                        MY LIST
                    </Link>
                </li>
                <li>
                    <Link className='header-nav-item' to='column'>
                        COLUMN
                    </Link>
                </li>
                <li>
                    <Link className='header-nav-item' to='location'>
                        LOCATION
                    </Link>
                </li>
                <li>
                    <Link className='header-nav-item' to='mbtiTest'>
                        MBTI TEST
                    </Link>
                </li>
            </ul>
        </HeaderLeft>
        <HeaderRight>
            <Link className='header-nav-item' to='login'>
                LOGIN
            </Link>
        </HeaderRight>
    </HeaderContainer>
  )
}


