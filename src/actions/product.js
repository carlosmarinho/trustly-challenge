import api from 'api/index';
import { FETCH_ALL_PRODUCTS } from 'actions/types';
import products from 'json/product';

export const fetchAllProducts = () => async dispatch => {
    // const response = await api.get('/sneakers/index.json');
    // let response;
    // try{
    //     response = await fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
    // }
    // catch (e){
    //     console.log("errorrrrr: ", e)
    // }

    const response = products;
    
    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response.results
    })
}

export const fetchProductById = (id) => async dispatch => {
 
    const response = products;
    
    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response.results
    })
}