import React from 'react';
import styled from 'styled-components';
import { PaymentMethod } from './PaymentMethod';

const Content = styled.div`
    width: 60%;

    p {
        color: #A5A5A5;
        line-height:13px;
        margin: 5px 5px 0px 0px;
        font-size: 13px;
    }

    .cart-total{
        /* margin-bottom: 20px;  */
    }

    @media(min-width: 400px) {

        margin-left: 0px;
        width: 60%;
        
        p{
            line-height: 14px;
        }

        
        .cart-total {
            width: 40%;
            padding: 5% 5% 0 5%
            /* margin: 30px; */
        }        
        
    }

    
`

export const ReceiptContent = (props) => {
    let { color, size, quantity, description, id, price } = props;
    quantity = quantity ? quantity : 1;
    return(
        <Content>
                <div class="cart-total">
                    <h4>{description}</h4>
                    <p>x {quantity} {color} Size {size}</p>
                    <p>Item #{id}</p>
                </div>
        </Content>

    )
}