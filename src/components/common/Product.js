import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { ButtonLink } from './ButtonLink'
import { setProductSize } from 'actions/product';


const ProductWrapper = styled.div`
    width: 100%;
    text-align: center;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);

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

    div{
        margin-top: 20px;
    }

    input{
        margin-bottom: 10px;
    }

    .add-to-cart{
        width: 100%;
        height: 60px   
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
}) => {
    const arQty = [...Array(10).keys()];
    const arSize = [38, 39, 40, 41, 42];
    const { productReducer } = useSelector(state => state)
    const dispatch = useDispatch();

    console.log("propssssssssssssssa: ", productReducer);
    
    return(
        <ProductWrapper >
            <img src={thumbnailURL} />
            <h3>{description}</h3>
            <div>
                Size <select 
                    onChange={e=>dispatch(setProductSize(e.target.value))}
                >
                    <option>---</option>
                    {arSize.map(s => <option>{s}</option>)}
                </select>
                Quantity <select >
                    <option>---</option>
                    {arQty.map(q => <option>{q+1}</option>)}
                </select>
            </div>
            <div>{value}</div>
            <div class="add-to-cart">
                <ButtonLink to={`/checkout/${id}`} >Add to cart</ButtonLink>
            </div>
        </ProductWrapper>
    )
}