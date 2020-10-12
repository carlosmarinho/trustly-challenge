import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    
    @media(min-width: 600px){
        background-color: #f6f6f6;
        
    }
`

const UserIcon = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ccc;
    margin: auto 20px auto auto;

    @media(min-width: 600px){
        background-color: white;
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