import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 60%;

    @media(min-width: 400px) {

        margin-left: 20px;
        background: #F7F7F7;
        border-radius: 10.8766px;
        width: 100%;
        
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
    
        .total-cost{
            display: flex;
            margin: initial;
        }
    
        .total-cost div{
            width: 50%;
            display: flex;
            flex-direction: column;
            margin: initial;
        }
    
        .total-cost div h4{
            margin: 0;
        }
    
        .total-cost div p{
            margin: 10px 0 0 0;
        }
    
        h3 {
            margin-top: 10px;
            font-weight: normal;
        }
        
        p {
            color: #A5A5A5;
            line-height:10px;
        } */
    }

    
`

export const CheckoutContent = ({ description, id, price }) => {
    
    return(
        <Content>
            <div class="top-checkout">
                <div class="cart-total">
                    <h3>Cart Total</h3>
                    <h4>{description}</h4>
                    <p>x 1 Green Size 41 Item #2839u512401</p>
                    <p>Item #{id}</p>
                </div>
                <div class="delivery-details">
                    <h3>Delivery Details</h3>
                    <p>John Smith</p>
                    <p>Phone no: 01312428200</p>
                    <p>Address: Redwood City, 2000. </p>
                    <div class="total-cost">
                        <div>
                            <h4>Total cost</h4>
                            <p>Delivery included</p>
                        </div>
                        <div>{price}</div>
                    </div>
                </div>
            </div>
        </Content>
    )
}