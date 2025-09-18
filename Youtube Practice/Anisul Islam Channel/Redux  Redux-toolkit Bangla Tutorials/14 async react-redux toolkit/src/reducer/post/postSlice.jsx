import {createSlice} from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts:[]
    },
    reducers: {
        getPosts: (state, action) => {
           return  state.posts;
        }
    }
})

export const {getPosts} = postSlice.actions;
export default postSlice.reducer;
