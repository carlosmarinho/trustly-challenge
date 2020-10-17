import React from 'react';
import styled from 'styled-components';

const TypePayment = styled.div`
    display: flex;    
    width: 100%;
    height: 55px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 9px;
    box-sizing: border-box;
    justify-content: center;
    border: ${p => p.selected ? '2px solid #63B55C' : '0'};
    

`


export const TypePaymentWrapper = ({ children, selected, handleClick }) => {

    console.log("selected no type payment: ", selected)
    
    return (
        <TypePayment selected={selected} onClick={() => handleClick()}>
            {children}
        </TypePayment>
        
    )
}