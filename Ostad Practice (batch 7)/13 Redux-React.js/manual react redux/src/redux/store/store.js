import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../state/Counter/counterSlice.jsx";
import todoReducer from "../state/todo/todoSlice.js";

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})