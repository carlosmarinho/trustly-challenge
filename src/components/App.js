import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from 'pages/home'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-size: 14px;

        @media(min-width: 600px) {
            font-size: 16px;
        }
    }
`

const Checkout = () => <div>Checkout do produto</div>;

const App = () => {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/checkout" exact component={Checkout} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;