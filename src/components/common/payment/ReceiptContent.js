import React from 'react';
import styled from 'styled-components';
import { ReceiptPaymentMethod } from './ReceiptPaymentMethod';
import { Button } from '../'

const Content = styled.div`
    width: 60%;

    p {
        color: #A5A5A5;
        line-height:13px;
        margin: 5px 5px 0px 0px;
        font-size: 13px;
    }

    @media(min-width: 400px) {
        box-sizing: border-box;
        display: flex;
        background: #F7F7F7;
        margin-left: 0px;
        width: 60%;
        flex-direction: column;
        
        p{
            line-height: 14px;
        }

        
        .cart-total {
            width: 50%;
            padding: 20px 20px 0 30px;
            /* margin: 30px; */
        }        
        
    }

    
`

const PaymentMethod = styled.div`
    display: none;
    align-items: center;
    @media(min-width: 400px) {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        h3 {
            width: 100%;
            margin: 50px 0 10px 0;
        }
    }
`

const TotalCost = styled.div`
    display: none;

    @media(min-width: 400px) {
        display: flex;
        width: 50%;
        

        h4 {
            font-size: 16px;
            color: black;
            margin: 10px 0 0 0;
        }

        p {
            margin: 10px 0;
            color: #a5a5a5;
            font-size: 12px;
        }

        span {
            color: black;
            font-size: 48px;
            margin-left: 10px;
            font-weight: bold;
        }
    }
`

const ButtonWrapper = styled.div`
    display: none;

    Button{
        margin: initial;
        margin-top: 10px;
        width: 250px;
        cursor: pointer;
    }

    @media(min-width: 400px) {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        margin-left: 20px;
        Button{
            margin: 0px 20px 0 20px;
            width: 100%;
        }
    }

    
`

const FirstRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

`
const SecondRow = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin: 80px 20px 20px 30px;
`

export const ReceiptContent = (props) => {
    let { color, size, quantity, description, id, price } = props;
    quantity = quantity ? quantity : 1;
    return(
        <Content>
                <FirstRow>
                    <div className="cart-total">
                        <h4>{description}</h4>
                        <p>x {quantity} {color} Size {size}</p>
                        <p>Item #{id}</p>
                    </div>
                    <PaymentMethod>
                        <h3>Payment Method</h3>
                        <img src="/images/green-bank-icon.png" alt="Imagem do banco"/>
                        <p>Online Banking</p>
                    </PaymentMethod>
                </FirstRow>
                <SecondRow>
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
                </SecondRow>
                
        </Content>

    )
}