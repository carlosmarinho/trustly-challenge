import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT } from 'actions/types';

const initialState = {
    products: [],
    product: {}
}

export default (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
}