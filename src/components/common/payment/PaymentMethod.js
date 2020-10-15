import React from 'react';
import styled from 'styled-components';
import { TypePaymentWrapper } from './TypePaymentWrapper';

const PaymentMethodWrapper = styled.div`

    background: #F7F7F7;
    border-radius: 9.02222px;
    padding: 20px;
    color: #565656;
    
    @media(min-width: 400px) {
        width: 100%;
    }
    
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

    @media(min-width: 400px) {
        flex-direction: column-reverse;
        margin-top: 0px;
        padding-top: 0px;
        
        
        
    }
`

const FirstWrapperDouble = styled(FirstWrapper)`
    @media(min-width: 400px) {
        justify-content: flex-end;
    
        span {
            margin-top: -5px;
            margin-bottom: 10px;
            font-size: 10px;
            max-width: 70px;
        }
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
                <FirstWrapperDouble>
                    <p>Online Banking</p>
                    <span>Save $10</span>
                </FirstWrapperDouble>
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