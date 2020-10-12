import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    background-color: #ccc;
    margin: 0px;
`

const Header = () => {
    return(
        <HeaderWrapper>
            Menu
        </HeaderWrapper>
    )
}

export default Header;