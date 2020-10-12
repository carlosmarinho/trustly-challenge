import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/home'

const ProductList = () => <div>Lista de produtos</div>;
const Checkout = () => <div>Checkout do produto</div>;


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/checkout" exact component={Checkout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;