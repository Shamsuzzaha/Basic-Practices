import {createStore} from "redux";

const GET = 'GET'
const ADD = 'ADD'
const DELETE = 'DELETE'
const UPDATE = 'UPDATE'

//----------- product
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

// global store
const store = createStore(productReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProduct('mango'))


//---------- cart
// initial state define
const initialCartState = {
    cart:['sugar'],
    cartCount: 1
}

//Reducer define
