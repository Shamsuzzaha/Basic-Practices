import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        list:["hello", "how"]
    },
    reducers:{
        AddTask: (state, action) => {
            state.list.push(action.payload)
        },
        RemoveTask: (state, action) => {
            state.list.splice(action.payload, 1)
        },
        EditTask: (state, action) => {
            state.list.splice(action.payload['index'], 1, action.payload['text'])
        }
    }
})

export const {AddTask,RemoveTask,EditTask} = todoSlice.actions;
export default todoSlice.reducer;