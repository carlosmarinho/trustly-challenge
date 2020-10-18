import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TypePaymentWrapper } from './TypePaymentWrapper';
import { Button } from '../Button';
import { generateUid } from 'util/index';
import { setProductMerchandReference } from 'actions/product';

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



export const PaymentMethod = (props) => {
    const [divSelected, setDivSelected] = useState();
    const dispatch = useDispatch();
    const { price, maxresURL } = props;
    const history = useHistory();

    const handlePayment = ({price, description, id}) => {
        const uid = generateUid();
        
        const obj = {
            accessId: 'D61EC9BAF0BB369B9438',
            merchantId: '1004314986',
            metadata: { demo: 'enabled' },
            currency: 'USD',
            paymentType: 'Deferred',
            amount: price,
            description: `${description} - email: carluizfla@hotmail.com`,
            merchantReference: uid,
            returnUrl: '/receipt/success',
            cancelUrl: '#cancel'
        }
        
        // Não funcionou setar no reducer pois o sistema redireciona e ele perde o storage do reducer, 
        // por isso irei usar o local storage
        // dispatch(setProductMerchandReference(id, uid))
        localStorage.setItem('merchantProduct', JSON.stringify({id: id, merchantReference: uid}))
        window.PayWithMyBank.establish(obj);
    }

    const handlePaymentMethod = (div) => {
        setDivSelected(div)
    }


    window.PayWithMyBank.addPanelListener(function(command, event) {
        if (command === 'event' && event.type === 'new_location') {
          if (event.data.indexOf('#success') === 0) {
            // alert('success!', event.data);
            history.push("/receipt");
          } else {
            // alert('cancel!');
          }
          return false;
        }
    });

    return (
        <PaymentMethodWrapper>
            <TypePaymentWrapper selected={divSelected==='first'} handleClick={() => handlePaymentMethod('first')}>
                <FirstWrapperDouble>
                    <p>Online Banking</p>
                    <span>Save $10</span>
                </FirstWrapperDouble>
                <SecondWrapper>
                    <div class="bandeiras">
                        <img src="/images/bandeiras-bancos.png" alt="bandeiras do online banking" />
                    </div>
                </SecondWrapper>    
            </TypePaymentWrapper >
                
            <TypePaymentWrapper selected={divSelected==='second'} handleClick={() => handlePaymentMethod('second')}>
                <FirstWrapper>
                    <p>Card Payment</p>
                </FirstWrapper>
                <SecondWrapper>
                    <div>
                        <img src="/images/card-payment.png" alt="Cartões de créditos" />
                    </div>
                </SecondWrapper>
            </TypePaymentWrapper>
            
            <TypePaymentWrapper selected={divSelected==='third'} handleClick={() => handlePaymentMethod('third')}>
                <FirstWrapper>
                    <p>Apple Pay</p>
                </FirstWrapper>
                <SecondWrapper>
                    <div>
                        <img src="/images/apple-pay.png" alt="apple pay" />
                    </div>
                </SecondWrapper>
            </TypePaymentWrapper>
            <ButtonWrapper >
                <Button onClick={() => handlePayment(props)}>Continue</Button>
            </ButtonWrapper>
        </PaymentMethodWrapper>
        
    )
}