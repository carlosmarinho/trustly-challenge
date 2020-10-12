import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageLayout from 'components/PageLayout'
import { SearchBar } from 'components/common';


import { fetchAllProducts } from 'actions/product';
import product from 'json/product';

const Home = () => {
    const { productReducer: { products } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts());
    },[])

    console.log("productreducer: ", products);

    return(
        <PageLayout>
            <SearchBar />            
            <div>Minha listagem de produtos</div>
            <ul>
                {products.map(product => 
                    <li>{product.description}</li>
                )}
            </ul>
        </PageLayout>
    )
}

export default Home;