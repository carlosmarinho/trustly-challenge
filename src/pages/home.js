import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PageLayout from 'components/PageLayout'
import { SearchBar, Product } from 'components/common';


import { fetchAllProducts } from 'actions/product';
import product from 'json/product';

const ProductContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
    grid-gap: 2rem; 

    @media(min-width: 400px) {
        grid-template-columns: repeat(3, 1fr);
    
    }

    /* div{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
    } */
`

const Home = () => {
    const { productReducer: { products } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts());
    },[])


    return(
        <PageLayout pageName="Sneakers">
            <SearchBar />        
            <ProductContainer>                
                {products.map(product => 
                    <div key={product.id}><Product {...product} /></div>
                )}
            </ProductContainer>    
        </PageLayout>
    )
}

export default Home;