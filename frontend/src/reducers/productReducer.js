import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS } from "../constants/productConstants";


export const productReducer = ((state = { products: [] }, action) => {
    switch (action.type) {
        
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: true,
                product: action.payload.products,
                productCount: action.payload.productCount,

            }

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;

    }
})