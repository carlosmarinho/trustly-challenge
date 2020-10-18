import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { useSelector } from 'react-redux';

import { ReceiptContent } from './payment/ReceiptContent';
import { ReceiptPaymentMethod } from './payment/ReceiptPaymentMethod';

const ReceiptWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    background: #F7F7F7;
    border-radius: 10.8766px;
    padding: 15px 0 10px 10px;
    flex-direction: column;

    h3 {
        font-size: 18px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }
     

    @media(min-width: 400px) {
        max-width: 1000px;
        background: initial;
        flex-wrap: initial;
        padding: initial;
    }

`

const PageName = styled.h2`
    margin: 0 0 5px 0;

    @media(min-width: 400px) {
        display: none;
    }
`

const ReceiptImg = styled.div`
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

const ReceiptPaymentMethodMobile = styled.div`

    @media(min-width: 400px) {
        display: none;
    }

`


export const Receipt = (props) => {
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    

    const { price, maxresURL, pageName } = props;
    return(
        <>
            <PageName>{pageName}</PageName>
            <ReceiptWrapper>
                <h3>Order Summary</h3>
                <div class="wrapper">
                    <ReceiptImg>
                        <img src={maxresURL} />
                    </ReceiptImg>
                    <ReceiptContent {...props} />
                </div>
            </ReceiptWrapper>
            <ReceiptPaymentMethodMobile>
                <ReceiptPaymentMethod />
                <Button >Place Order</Button>
            </ReceiptPaymentMethodMobile>
            
        </>
    )
}