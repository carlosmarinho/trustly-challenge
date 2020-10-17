import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { ButtonLink } from './ButtonLink'
import { setProductSize, setProductQty } from 'actions/product';


const ProductWrapper = styled.div`
    width: 100%;
    text-align: center;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
    color: #8d8d8d;

    img{
        width: 100%;
        max-width: 300px;
        min-width: 250px;
        height: 170px;
    }

    h3{
        text-align: center;
        font-weight: normal;
    }

    /* div{
        margin-top: 20px;
    } */

    input{
        margin-bottom: 10px;
    }

    .add-to-cart{
        width: 100%;
        height: 60px;
    }

    select {
        border-radius: 4px;
        border: 1px solid #8d8d8d;
        color: #8d8d8d;
    }

    select:first-child {
        margin-right: 10px;
    }

    p {
        color: black;
        font-size: 21px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
`

// const StyledLink = styled(Link)`
//     color: white;
//     background-color: #6B8067;
//     border-radius: 4.5px;
//     width: 80%;
//     height: 40px;
//     margin: auto 10% auto 10%;
//     font-size: 14px;
//     display: flex;
//     text-decoration: none;
//     align-items: center;
//     justify-content: center;
// `

export const Product = ({
    thumbnailURL, 
    description, 
    value, 
    id, 
    price,
}) => {
    const arQty = [...Array(10).keys()];
    const arSize = [38, 39, 40, 41, 42];
    const { productReducer } = useSelector(state => state)
    const dispatch = useDispatch();
    
    return(
        <ProductWrapper >
            <img src={thumbnailURL} />
            <h3>{description}</h3>
            <div>
                Size <select 
                    onChange={e=>dispatch(setProductSize(id, e.target.value))}
                >
                    <option key="0">---</option>
                    {arSize.map(s => <option key={s}>{s}</option>)}
                </select>
                Quantity <select 
                    onChange={e=>dispatch(setProductQty(id, e.target.value))}
                >
                    <option>---</option>
                    {arQty.map(q => <option key={q}>{q+1}</option>)}
                </select>
                <p>$ {price}</p>
            </div>
            <div>{value}</div>
            <div className="add-to-cart">
                <ButtonLink to={`/checkout/${id}`} >Add to cart</ButtonLink>
            </div>
        </ProductWrapper>
    )
}