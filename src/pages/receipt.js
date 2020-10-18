import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from 'components/PageLayout'
import { 
    Checkout as CheckoutWrapper,
    Breadcrumb
} from 'components/common';

import { fetchProductById } from 'actions/product';

const Checkout = () => {
    const { id } = useParams();
    const { productReducer: { product } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[])


    return(
        <PageLayout backButton={{text: 'Back', link: `/content/${id}`}} pageName="Review and Confirmation" large>
            <Breadcrumb />
            <CheckoutWrapper {...product} pageName="Checkout"/>
        </PageLayout>
    )
}

export default Checkout;