import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 60%;

    p {
        color: #A5A5A5;
        line-height:13px;
        margin: 5px 5px 0px 0px;
        font-size: 13px;
    }

    .cart-total{
        margin-bottom: 20px; 
    }

    @media(min-width: 400px) {

        margin-left: 20px;
        
        
        /* width: 60%; */
        
        p{
            line-height: 10px;
        }
        
        /* div{
            display: flex;
            width: 90%;
            margin: 0 5% 0 5%;
        }
    
        div.top-checkout{
            margin-top: 20px;
        }
    
    
        .cart-total {
            display: block;
            margin: initial;
        }
    
        .cart-total p{
            margin-left: 5px;
        }
    
        .cart-total h4{
            margin-left: 5px;
            line-height: 10px;
            margin-bottom: 0px;
        }
    
        .delivery-details {
            display: block;
            margin: initial;
        }
    
        
    
        h3 {
            margin-top: 10px;
            font-weight: normal;
        }
        
         */
    }

    
`

export const CheckoutContent = ({ description, id, price }) => {
    
    return(
        <Content>
            <div class="top-checkout">
                <div class="cart-total">
                    <h3>Cart Total</h3>
                    <h4>{description}</h4>
                    <p>x 1 Green Size 41</p>
                    <p>Item #{id}</p>
                </div>
                <div class="delivery-details">
                    <h4>Delivery Details</h4>
                    <p>John Smith</p>
                    <p>Phone no: 01312428200</p>
                    <p>Address: Redwood City, 2000. </p>
                </div>
            </div>
        </Content>
    )
}