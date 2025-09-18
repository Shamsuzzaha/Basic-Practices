import {createStore, combineReducers } from "redux";

//-------- common part+---------
const GET = 'GET'
const ADD = 'ADD'
const DELETE = 'DELETE'
const UPDATE = 'UPDATE'


//--------- product -----
// initial state define
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
}

// action function define
const getProducts = () => {
    return {
        type: GET
    }
}
const addProduct = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

// Reducer/logic handle
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        case GET:
            return {
                ...state,
            }
        default:
            return state
    }
}

//---------- cart -------
// initial state define
const initialCartState = {
    cart:['sugar'],
    cartCount: 1
}

// action function for cart
const getCarts = () => {
    return {
        type: GET
    }
}
const addCart = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

//Reducer define
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD:
            return {
                cart: [...state.cart, action.payload],
                cartCount: state.cartCount + 1
            }
        case GET:
            return {
                ...state,
            }
        default:
            return state
    }
}
// -----------------

//--store define---

// global store
const rootReducer = combineReducers({
    cartR: cartReducer,
    productsR: productReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(getCarts())

store.dispatch(addProduct('mango'))
store.dispatch(addCart('banana'))