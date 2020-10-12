import api from 'api/index';
import { FETCH_ALL_PRODUCTS } from 'actions/types';

export const fetchAllProduct = () => async dispatch => {
    const response = await api.get('/sneakers/index.json');


    dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response.data
    })
}