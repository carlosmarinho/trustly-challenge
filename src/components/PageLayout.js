import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
    max-width: 800px;
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