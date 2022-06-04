import { configureStore } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from '../reducers/productReducers';
import { cartReducer } from '../reducers/cartReducers';

const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
}


// getting the cart items from the local storage but we need to parse them down since they are a json object
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {
        cartItems: 'hello'
    }
};

const store = configureStore({
    reducer,
    initialState,
})

export default store
