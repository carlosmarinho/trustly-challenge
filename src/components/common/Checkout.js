import React from 'react';
import styled from 'styled-components';

const CheckoutWrapper = styled.div`
    display: flex;

    img{
        max-width: 532px;
        min-width: 300px;
    }
`

const CheckoutContent = styled.div`
    
    margin-left: 20px;
    background: #F7F7F7;
    border-radius: 10.8766px;
    width: 100%;

    div{
        display: flex;
        width: 100%;
        margin: 0 30px 0 30px;
    }

    div.top-checkout{
        margin-top: 20px;
    }

    div div {
        display: block;
        margin: initial;
    }

    h3 {
        margin-top: 10px;
    }
    
`

export const Checkout = ({ maxresURL, description, id, price }) => {
    
    return(
        <CheckoutWrapper>
            <img src={maxresURL} />
            <CheckoutContent>
                <div class="top-checkout">
                    <div>
                        <h3>Cart Total</h3>
                        <p><strong>{description}</strong></p>
                        <p>x 1 Green Size 41 Item #2839u512401</p>
                        <p>Item #{id}</p>
                    </div>
                    <div>
                        <h3>Delivery Details</h3>
                        <p>John Smith</p>
                        <p>Phone no: 01312428200</p>
                        <p>Address: Redwood City, 2000. </p>
                        <div>
                            <div>
                                <h4>Total cost</h4>
                                <p>Delivery included</p>
                            </div>
                            <div>{price}</div>
                        </div>
                    </div>
                </div>
                <div class="paymentMethod">
                    <h3>Select your payment method</h3>
                </div>
            </CheckoutContent>
        </CheckoutWrapper>
    )
}