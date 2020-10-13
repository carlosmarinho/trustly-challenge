import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
    max-width: 1100px;
    margin: 100px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    h3{
        font-size: 20px;
    }

    @media(min-width: 600px) {
        margin: 157px auto 0 auto;
    }
`

const PageLayout = ({children}) => {
    return(
        <>
            <Header />
            <Content>
                {children}
            </Content>
        </>
    )
}

export default PageLayout