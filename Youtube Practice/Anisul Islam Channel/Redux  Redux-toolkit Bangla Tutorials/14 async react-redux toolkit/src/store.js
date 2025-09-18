import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./reducer/post/postReducer.jsx";

const store = configureStore({
    reducer: {
        posts: postReducer,
    }
})