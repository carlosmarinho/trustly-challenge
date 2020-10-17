import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumbWrapper = styled.div`
    display: none;
    
    @media(min-width:400px) {
        display: flex;
        width: 100%;
        height: 20px;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        flex-direction: column;
    }

`

const BarWrapper = styled.div`
    display: flex;
    width: ${p => p.longer ? '73%' : '70%'};
    align-items: center;
    justify-content: ${p => p.longer ? 'space-between' : 'initial'};
    margin-bottom: ${p => p.longer ? '20px' : 'initial'};
    font-size: 16px;

    p{

    }
`

const BreadcrumbLabel = styled.p`
    margin-top: 10px;
    color: ${p => p.inactive ? '#BEBEBE' : 'initial'};

    a {
        text-decoration: none;
        color: black;
    }
`

const Bar = styled.div`

    @media(min-width:400px) {
        width: 47%;
        background-color: #e8e8e8;
        height: 1px;
    }
`

const Point = styled.div`
    width: 15px;
    height: 15px;
    background: ${p => p.inactive ? '#E8E8E8' : '#61CB46'};
    border-radius: 15px;
`

export const Breadcrumb = () => {
    return(
        <BreadcrumbWrapper>
            <BarWrapper>
                <Point />
                <Bar/>
                <Point />
                <Bar />
                <Point inactive/>
            </BarWrapper>
            <BarWrapper longer>
                <BreadcrumbLabel>
                    <Link to="/">Cart</Link>
                </BreadcrumbLabel>
                <BreadcrumbLabel>Payment Options</BreadcrumbLabel>
                <BreadcrumbLabel inactive>Receipt</BreadcrumbLabel>
            </BarWrapper>
        </BreadcrumbWrapper>
    )
}