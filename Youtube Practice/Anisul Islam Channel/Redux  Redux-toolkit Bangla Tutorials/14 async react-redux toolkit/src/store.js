import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducer/postSlice.jsx";

const store = configureStore({
    reducer: {
        posts: postReducer,
    }
})

export default store;