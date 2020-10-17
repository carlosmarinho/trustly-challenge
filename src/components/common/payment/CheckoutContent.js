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

        /* span {
            margin-top: 5px;
        } */

        .top-checkout{
            display: flex;
            width: 100%;
            /* margin: 0px 20px 0 20px; */
            background: #f7f7f7;
            box-sizing: border-box;
            flex-wrap: wrap;
            border-radius: 10px;
        }
            
        
        .cart-total {
            width: 40%;
            padding: 5% 5% 0 5%
            /* margin: 30px; */
        }
    

        .delivery-details {
            width: 40%;
            padding: 5% 5% 0 5%
            /* margin: 30px; */
        }
        
    
        h3 {
            margin-top: 10px;
            font-weight: normal;
        }
        
        
    }

    
`
const TotalCostMobile = styled.div`

    .total-cost-mobile{
        width: 100%;
        display: flex;
        margin: 10px 20px 10px 20px;
    }

    .label-cost, .price{
        width: 50%;
        display: flex;
        flex-direction: column;
        margin: initial;
    }

    .label-cost p {
        color: #A5A5A5;
        line-height:14px;
        margin: 5px;
    }

    .price{
        align-items: flex-end;
        font-size: 36px;
    } 


    .total-cost-mobile div h4{
        margin: 0;
    }

    .total-cost-mobile div p{
        margin: 10px 0 0 0;
    }

    @media(min-width:400px) {
        display: none;
    }

`


export const CheckoutContent = ({ color, size, quantity, description, id, price, children }) => {
    
    return(
        <>
        <Content>
            <div class="top-checkout">
                <div class="cart-total">
                    <h3>Cart Total</h3>
                    <h4>{description}</h4>
                    <p>x {quantity ? quantity : '1'} {color} Size {size}</p>
                    <p>Item #{id}</p>
                </div>
                <div class="delivery-details">
                    <h4>Delivery Details</h4>
                    <p>John Smith</p>
                    <p>Phone no: 01312428200</p>
                    <p>Address: Redwood City, 2000. </p>
                    <div class="total-cost">
                        <div class="label-cost">
                            <h4>Total cost</h4>
                            <p>Delivery included</p>
                        </div>
                    <div class="price">${price}</div>
                </div>
                </div>
                
                <div class="payment-method">
                    <h3>Select your payment method</h3>
                    <PaymentMethod />
                    
                </div>    
            </div>
        </Content>
        <TotalCostMobile >
            <div class="total-cost-mobile">
                <div class="label-cost">
                    <h4>Total cost123</h4>
                    <p>Delivery included</p>
                </div>
                <div class="price">${price}</div>
            </div>
        </TotalCostMobile>
        
        </>
    )
}