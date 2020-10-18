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
    display: none;

    @media(min-width:400px) {
        display: block;
        margin: auto auto auto auto;
        font-weight: bolder;
        font-size: 1.6rem;
    }
`

const MenuLink = styled(Link)`
    padding: 5px 15px;
    background: rgba(0,0,0,0.05);
    border-radius: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;

    img{
        margin-right: 10px;
        width: 14px;
        height: 14px;
    }

    @media(min-width:400px) {
        font-size:20px;
    }

`

const Header = ({pageName, backButton}) => {
    return(
        <HeaderWrapper>
            <NavigationText>
                <MenuLink 
                    to={backButton 
                        ? backButton.link 
                        : ""}
                >
                    <img src="/images/arrow.png" />
                    {backButton ? backButton.text : ''}
                </MenuLink>
            </NavigationText>
            <PageName>{ pageName }</PageName>
            <UserIcon >
                <img src="/images/avatar.png" alt=""/>
            </UserIcon>
        </HeaderWrapper>
    )
}

export default Header;