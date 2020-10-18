import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const ReceiptPaymentMethodWrapper = styled.div`
    background: #F7F7F7;
    border-radius: 9.02222px;
    padding: 0 20px 20px 10px;
    color: #565656;
    margin-top:20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h3{
        font-size: 18px;
        width: 100%;
        color: black;
    }

    p {
        font-size: 17px;
        margin-left: 10px;
    }
    
    @media(min-width: 400px) {
        width: 100%
    }
    
`

const ButtonWrapper = styled.div`
    display: none;

    @media(min-width: 400px) {
        display: flex;
        justify-content: flex-end;
    }

    Button{
        margin: initial;
        margin-top: 10px;
        width: 250px;
        cursor: pointer;
    }
`

const TotalCost = styled.div`
    display: flex;
    border-top: 1px solid #d6d6d6;
    width: 100%;
    margin-top: 10px;
    padding-top: 20px; 

    h4 {
        font-size: 16px;
        color: black;
        margin: 10px 0 0 0;
    }

    p {
        margin: 10px 0;
        color: #a5a5a5;
    }

    span {
        color: black;
        font-size: 50px;
        margin-left: 20px;
        font-weight: bold;
    }
`

export const ReceiptPaymentMethod = (props) => {
    const { price, maxresURL } = props;
    
    return (
        <ReceiptPaymentMethodWrapper>
            <h3>Payment Method</h3>
            <img src="/images/green-bank-icon.png" alt="Imagem do banco"/>
            <p>Online Banking</p>
            <TotalCost>
                <div>
                    <h4>Total Cost</h4>
                    <p>Delivery Included</p>
                </div>
                <div>
                    <span>${price}</span>
                </div>
            </TotalCost>
            <ButtonWrapper >
                <Button>Place Order</Button>
            </ButtonWrapper>
        </ReceiptPaymentMethodWrapper>
        
    )
}