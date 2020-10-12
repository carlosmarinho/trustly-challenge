import { FETCH_ALL_PRODUCTS } from 'actions/types';

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
        default:
            return state;
    }
}