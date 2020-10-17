import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    
    a {
        text-decoration: none;
        color: black;
    }

    @media(min-width: 400px){
        background-color: #f6f6f6;
        height: 87px;
    }

`

const UserIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #ccc;
    margin: auto 20px auto auto;

    @media(min-width: 400px){
        background-color: white;
        width: 35px;
        height: 35px;
    }
    
`

const NavigationText = styled.div`
    margin: auto auto auto 20px;
    font-weight: bolder;
`

const PageName = styled.h2`
    margin: auto auto auto auto;
    font-weight: bolder;
    font-size: 1.6rem;
`

const Header = ({pageName, backButton}) => {
    return(
        <HeaderWrapper>
            <NavigationText>
                <Link 
                    to={backButton 
                        ? backButton.link 
                        : ""}
                >
                    {backButton ? backButton.text : ''}
                </Link>
            </NavigationText>
            <PageName>{ pageName }</PageName>
            <UserIcon />
        </HeaderWrapper>
    )
}

export default Header;