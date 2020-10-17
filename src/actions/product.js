import api from 'api/index';
import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT, SET_PRODUCT_SIZE } from 'actions/types';
import arProducts from 'json/product';

export const setProductSize = (el) => async dispatch => {
    
    console.log('elelelllllll: ', el);

    dispatch({
        type: SET_PRODUCT_SIZE,
        payload: {teste: 'teste'}
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
    if(!products) 
        response = products;
    else
        response = arProducts.results;
        
    const product = response.filter(product => product.id === id)[0]
        
    dispatch({
        type: FETCH_PRODUCT,
        payload: product
    })
}