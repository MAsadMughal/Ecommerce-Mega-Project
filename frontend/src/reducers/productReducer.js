import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";


export const productReducer = ((state = { products: [] }, action) => {
    switch (action.type) {

        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload.allProducts,
                productCount: action.payload.productCount,
                pageNo: action.payload.pageNo,
                queries:action.payload.queries

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





export const productDetailReducer = ((state = { products: {} }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }

        case PRODUCT_DETAILS_FAIL:
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