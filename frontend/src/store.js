import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailReducer, productReducer } from "./reducers/productReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/CartReducers";
import { myOrdersReducer, orderReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailReducer,
    user: userReducer,
    updatedProfile: profileReducer,
    cart: cartReducer,
    order:orderReducer,
    myOrders:myOrdersReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;