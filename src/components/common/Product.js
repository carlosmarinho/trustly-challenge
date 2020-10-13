import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
    width: 100%;
    text-align: center;

    img{
        width: 100%;
        max-width: 300px;
        min-width: 250px;
        height: 170px;
    }

    h3{
        text-align: center;
    }
`

export const Product = ({thumbnailURL, description, value, size, qty}) => {
    return(
        <ProductWrapper >
            <img src={thumbnailURL} />
            <h3>{description}</h3>
            <div>
                Size <select />
                Quantity <select />
            </div>
            <div>{value}</div>
            <input value="Add to cart" />
        </ProductWrapper>
    )
}