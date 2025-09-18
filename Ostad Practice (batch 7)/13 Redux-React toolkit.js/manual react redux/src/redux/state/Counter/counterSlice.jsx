import {createSlice} from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        customValue: (state, action) => {
            state.count = action.payload;
        }
    }
})

export const {increment, decrement, customValue} = CounterSlice.actions;
export default CounterSlice.reducer;