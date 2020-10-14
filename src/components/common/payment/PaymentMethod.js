import React from 'react';
import styled from 'styled-components';
import { TypePaymentWrapper } from './TypePaymentWrapper';

const PaymentMethodWrapper = styled.div`

    background: #F7F7F7;
    border-radius: 9.02222px;
    padding: 20px;
    
    
`

const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 43%;
    height: 100%;
    align-items: left;

    /* justify-items: center; */
    justify-content: center;
    p{
        margin: 0
    }

    span {
        background: #FFCC00;
        border-radius: 5px;
        margin-right: 40px;
        text-align: center;
    }
`
    
const SecondWrapper = styled.div`
    display: flex;
    width: 43%;
    align-items: center;
    justify-items: center;
    justify-content: flex-end; 

    .bandeiras img{
        width: 130px;
        height: 21px;
    }
    
    /* .bandeiras img{
        width: 130px;
        height: 21px;
    } */
`

export const PaymentMethod = (props) => {
    const { price, maxresURL } = props;
    return (
        <PaymentMethodWrapper>
            <TypePaymentWrapper>
                <FirstWrapper>
                    <p>Online Banking</p>
                    <span>Save $10</span>
                </FirstWrapper>
                <SecondWrapper>
                    <div class="bandeiras">
                        <img src="/images/bandeiras-bancos.png" alt="bandeiras do online banking" />
                    </div>
                </SecondWrapper>    
                
            </TypePaymentWrapper>
                
            <TypePaymentWrapper>
                <FirstWrapper>
                    <p>Card Payment</p>
                </FirstWrapper>
                <SecondWrapper>
                    <div>
                        <img src="/images/card-payment.png" alt="Cartões de créditos" />
                    </div>
                </SecondWrapper>
            </TypePaymentWrapper>
            
            <TypePaymentWrapper>
                <FirstWrapper>
                    <p>Apple Pay</p>
                </FirstWrapper>
                <SecondWrapper>
                    <div>
                        <img src="/images/apple-pay.png" alt="apple pay" />
                    </div>
                </SecondWrapper>
            </TypePaymentWrapper>
        </PaymentMethodWrapper>
        
    )
}