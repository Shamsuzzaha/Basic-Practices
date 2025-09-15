import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";

// destructure from default import
const { createLogger } = reduxLogger;
const logger = createLogger();

// ----Products
// initial state
const initialState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
};

// action define
const ADD = "ADD";
const GET = "GET";

const addProduct = (value) => ({ type: ADD, payload: value });
const getProducts = () => ({ type: GET });

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        case GET:
            return { ...state };
        default:
            return state;
    }
};

// store create
const store = createStore(productReducer, applyMiddleware(logger));

store.dispatch(getProducts());
store.dispatch(addProduct("mango"));
