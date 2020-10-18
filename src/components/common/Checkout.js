import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { useSelector } from 'react-redux';

import { CheckoutContent } from './payment/CheckoutContent';
import { PaymentMethod } from './payment/PaymentMethod';

const CheckoutWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    /* height: 575px; */
    flex-wrap: wrap;
    background: #F7F7F7;
    border-radius: 10.8766px;
    padding: 15px 0 10px 10px;

     
    .total-cost{
        display: none;
    }

    h3{
        /* font-size: 16px; */
        display: none;
    }

    h4{
        font-size: 16px;
        margin: initial;
    }

    .payment-method{
        display: none;
    }

    @media(min-width: 400px) {
        font-family: 'Open Sans';
        max-width: 1000px;
        background: initial;
        flex-wrap: initial;
        padding: initial;

        .payment-method{
            display: flex;
            width: 100%;
        }

        .total-cost{
            width: 100%;
            display: flex;
            margin: 30px 20px 10px 0px;
        }

        .label-cost, .price{
            width: 50%;
            display: flex;
            flex-direction: column;
            margin: initial;
        }

        .label-cost p {
            color: #A5A5A5;
            line-height:14px;
            margin: 5px;
        }

        .price{
            align-items: flex-end;
            font-size: 36px;
        }

        .total-cost div h4{
            margin: 0;
        }

        .total-cost div p{
            margin: 10px 0 0 0;
        }

    }

`

const PageName = styled.h2`
    margin: 0 0 5px 0;
    padding-top: 10px;
    @media(min-width: 400px) {
        display: none;
    }
`

const CheckoutImg = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 15px;

    
    img{
        width: 100%;
        min-height: 110px;
        border-radius:9px;
    }

    @media(min-width: 400px) {
        width: 40%; 
        min-height: 460px;
        display: flex;
        align-items: stretch;

        img{
            height: 100%;
            min-height: 477px;

        }
    }

`

const PaymentMethodMobile = styled.div`

    h3 {
        font-size: 16px;
    }    

    @media(min-width: 400px) {
        display: none;
    }

`


export const Checkout = (props) => {
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    

    const { price, maxresURL, pageName } = props;
    return(
        <>
            <PageName>{pageName}</PageName>
            <CheckoutWrapper>
                <CheckoutImg>
                    <img src={maxresURL} />
                </CheckoutImg>
                <CheckoutContent {...props} />
            </CheckoutWrapper>
            <PaymentMethodMobile>
                <h3>Payment Method</h3>
                <PaymentMethod />
                <Button >Continue</Button>
            </PaymentMethodMobile>
            
        </>
    )
}