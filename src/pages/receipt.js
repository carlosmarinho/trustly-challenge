import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import queryString from 'querystring';
import PageLayout from 'components/PageLayout'
import { 
    Receipt as ReceiptWrapper,
    Breadcrumb
} from 'components/common';

import { fetchProductById } from 'actions/product';

const Receipt = () => {
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    const localProduct = localStorage.getItem('merchantProduct')
    const id = localProduct ? JSON.parse(localProduct).id : null; 
    const { productReducer: { product, products } } = useSelector(state => state)
    const dispatch = useDispatch();


    useEffect(() => {
        if(id) {
            dispatch(fetchProductById(id));
        }
        // dispatch(fetchAllProducts());

    },[])

    return(
        <PageLayout backButton={{text: 'Back', link: `/checkout/${product.id}`}} pageName="Review and Confirmation" large>
            <Breadcrumb page="receipt"/>
            <ReceiptWrapper {...product} pageName="Review and Confirmation"/>
        </PageLayout>
    )
}

export default Receipt;