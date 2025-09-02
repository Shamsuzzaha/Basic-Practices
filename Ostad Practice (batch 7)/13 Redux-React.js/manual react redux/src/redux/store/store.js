import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../state/counterSlice.jsx";

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})