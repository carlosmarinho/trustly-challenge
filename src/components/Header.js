import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    
    @media(min-width: 600px){
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

    @media(min-width: 600px){
        background-color: white;
        width: 35px;
        height: 35px;
    }
    
`

const NavigationText = styled.div`
    margin: auto auto auto 20px;
    font-weight: bolder;
`

const Header = () => {
    return(
        <HeaderWrapper>
            <NavigationText>Back</NavigationText>
            <UserIcon />
        </HeaderWrapper>
    )
}

export default Header;