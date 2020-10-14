import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
    max-width: ${p => p.large ? '1300px' : '1100px'};
    margin: 70px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    h3{
        font-size: 20px;
    }

    @media(min-width: 400px) {
        margin: 157px auto 0 auto;
    }
`

const PageLayout = ({children, pageName, backButton }) => {
    return(
        <>
            <Header pageName={pageName} backButton={backButton}/>
            <Content>
                {children}
            </Content>
        </>
    )
}

export default PageLayout