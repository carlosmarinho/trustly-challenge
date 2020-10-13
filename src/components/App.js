import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from 'pages/home'
import Checkout from 'pages/checkout';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-size: 14px;

        @media(min-width: 600px) {
            font-size: 16px;
        }
    }
`


const App = () => {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/checkout/:id" exact component={Checkout} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;