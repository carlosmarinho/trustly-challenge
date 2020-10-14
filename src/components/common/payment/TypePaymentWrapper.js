import React from 'react';
import styled from 'styled-components';

const TypePayment = styled.div`
    display: flex;    
    width: 100%;
    height: 55px;
    border: 0;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 9px;
    box-sizing: border-box;
    justify-content: center;
    

`


export const TypePaymentWrapper = ({ children }) => {
    return (
        <TypePayment>
            {children}
        </TypePayment>
        
    )
}