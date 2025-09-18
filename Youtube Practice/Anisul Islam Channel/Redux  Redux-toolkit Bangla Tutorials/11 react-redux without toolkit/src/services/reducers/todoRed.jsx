import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "../constants/todosConst.jsx";

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

export const todosReducer = (state = initialState, action) => {
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
                error: action.payload,
            }
        default:
            return state;
    }
}