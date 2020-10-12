import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllProducts } from 'actions/product';

const Home = () => {
    const { productReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts());
    },[])

    return(
        <div>Minha listagem de produtos</div>
    )
}

export default Home;