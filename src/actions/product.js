import api from 'api/index';
import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT } from 'actions/types';
import arProducts from 'json/product';

export const setProductMerchandReference = (id, el) => async (dispatch, getState) => {  
    let products = getState().productReducer.products;
    products = products.map(p => {
        if(p.id === id)
        return {...p, merchantReference: el }

        return p
    })

    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: products
    })
}


export const setProductSize = (id, el) => async (dispatch, getState) => {
    let products = getState().productReducer.products;
    products = products.map(p => {
        if(p.id === id)
        return {...p, size: el }

        return p
    })

    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: products
    })
}

export const setProductQty = (id, el) => async (dispatch, getState) => {
    
    let products = getState().productReducer.products;
    products = products.map(p => {
        if(p.id === id)
        return {...p, quantity: el }

        return p
    })

    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: products
    })
}

export const fetchAllProducts = () => async dispatch => {
    // const response = await api.get('/sneakers/index.json');
    // let response;
    // try{
    //     response = await fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
    // }
    // catch (e){
    //     console.log("errorrrrr: ", e)
    // }

    const response = arProducts;
    
    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response.results
    })
}

export const fetchProductById = (id) => async (dispatch, getState) => {
    const { productReducer:{ products } } = getState();
    
    let response;
    if(products.length) 
        response = products;
    else
        response = arProducts.results;
 
    const product = response.filter(product => product.id === id)[0]
    dispatch({
        type: FETCH_PRODUCT,
        payload: product
    })
}

export const fetchProductByMerchantReference = (merchantReference) => async (dispatch, getState) => {
    const { productReducer:{ products } } = getState();
    
    let response;
    if(products.length) 
        response = products;
    else
        response = arProducts.results;
 
    const product = response.filter(product => product.merchantReference === merchantReference)[0]
    dispatch({
        type: FETCH_PRODUCT,
        payload: product
    })
}