import React from 'react';
import styled from 'styled-components';

import { CheckoutContent } from './CheckoutContent';

const CheckoutWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 575px;
    
`

const CheckoutImg = styled.div`
    border: 3px solid red;
    height: 100%;
    
    img{
        width: 100%;
        
    }

    @media(min-width: 400px) {
        width: 40%; 

        img{
            height: 100%;
        }
    }

`


export const Checkout = (props) => {
    
    return(
        <CheckoutWrapper>
            <CheckoutImg>
                <img src={props.maxresURL} />
            </CheckoutImg>
            <CheckoutContent {...props} />
            {/* <div class="paymentMethod">
                <h3>Select your payment method</h3>
                <div>

                </div>
            </div> */}
        </CheckoutWrapper>
    )
}