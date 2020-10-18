import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from 'components/PageLayout'
import { 
    Receipt as ReceiptWrapper,
    Breadcrumb
} from 'components/common';

import { fetchProductById } from 'actions/product';

const Receipt = () => {
    const { id } = useParams();
    const { productReducer: { product } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[])


    return(
        <PageLayout backButton={{text: 'Back', link: `/content/${id}`}} pageName="Review and Confirmation" large>
            <Breadcrumb />
            <ReceiptWrapper {...product} pageName="Review and Confirmation"/>
        </PageLayout>
    )
}

export default Receipt;