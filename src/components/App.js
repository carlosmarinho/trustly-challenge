import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/home'
import Header from './header';

const Checkout = () => <div>Checkout do produto</div>;


const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/checkout" exact component={Checkout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;