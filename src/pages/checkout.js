import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from 'components/PageLayout'
import { SearchBar, Checkout as CheckoutWrapper } from 'components/common';

import { fetchProductById } from 'actions/product';

const Checkout = () => {
    const { id } = useParams();
    const { productReducer: { product } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[])

    return(
        <PageLayout pageName="Checkout" backButton="Back" large>
            <CheckoutWrapper {...product} />
        </PageLayout>
    )
}

export default Checkout;