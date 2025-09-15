// use of redux thunk for asynchronous action
// https://jsonplaceholder.typicode.com/todos

// initial state define
import {createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import axios from "axios";

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
}

// constant
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
const API_URL = "https://jsonplaceholder.typicode.com/todos"

//action define
const getTodosRequest = () => ({
        type: GET_TODOS_REQUEST,
})
const getTodosSuccess = todos => ({
        type: GET_TODOS_SUCCESS,
        payload: todos,
})
const getTodosFailure = error => ({
        type: GET_TODOS_FAILURE,
        payload: error,
})

//reducer define
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

// fetch data
const fetchData = ()=>{
    return (dispatch)=>{
        dispatch(getTodosRequest())
        axios.get(API_URL)
            .then(res =>{
                const todos = res.data
                const titles = todos.map(todo => todo.title)
                dispatch(getTodosSuccess(titles))
            })
            .catch(err =>{
                const errorMsg = err.message
                dispatch(getTodosFailure(errorMsg))
            })
    }
}

//store define
const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())