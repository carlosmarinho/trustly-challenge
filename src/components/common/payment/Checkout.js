import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

import { CheckoutContent } from './CheckoutContent';
import { PaymentMethod } from './PaymentMethod';

const CheckoutWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    /* height: 575px; */
    flex-wrap: wrap;
    background: #F7F7F7;
    border-radius: 10.8766px;
    padding: 15px 0 10px 10px;

    h3{
        /* font-size: 16px; */
        display: none;
    }

    h4{
        font-size: 16px;
        margin: initial;
    }
 
    .total-cost{
        width: 100%;
        display: flex;
        margin: 10px 20px 10px 20px;
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

    .payment-method{
        display: none;
    }


    @media(min-width: 400px) {
        .payment-method{
            display: flex;
            flex-direction: column;
        }

        .payment-method h3{
            display: block;
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

        img{
            height: 100%;
        }
    }

`


export const Checkout = (props) => {
    const { price, maxresURL, pageName } = props;
    return(
        <>
            {/* <h2>{pageName}</h2> */}
            <CheckoutWrapper>
                <CheckoutImg>
                    <img src={maxresURL} />
                </CheckoutImg>
                <CheckoutContent {...props} />
                <div class="total-cost">
                    <div class="label-cost">
                        <h4>Total cost</h4>
                        <p>Delivery included</p>
                    </div>
                    <div class="price">${price}</div>
                </div>
                <div class="payment-method">
                    <h3>Select your payment method</h3>
                    <div>

                    </div>
                </div>    
            </CheckoutWrapper>
            <PaymentMethodMobile>
                <h3>Payment Method</h3>
                <PaymentMethod />
                <Button >Continue</Button>
            </PaymentMethodMobile>
            
        </>
    )
}