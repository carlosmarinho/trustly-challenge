import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: #6B8067;
    border-radius: 4.5px;
    width: 100%;
    margin-top: 10px;
    height: 40px;
    display: block;
    white-space: none;
    border-style: none;
    
    @media(min-width: 400px) {
        margin: 10px 10% 10px 10%;
        width: 80%;
    }

    &:disabled{
        background: #eee;
        color: #666;
    }
`

export {Button};