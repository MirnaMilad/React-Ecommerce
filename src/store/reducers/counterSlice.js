import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name : "counter",
    initialState : {count : 0},
    reducers : {
        increase : (state , action)=>{
            state.count +=action.payload
        },
        decrease : (state , action)=>{
            state.count -=action.payload
        },
        clearAll :(state , action)=>{
            state.count = 0
        }
    }
})

export const counterReducer = counterSlice.reducer
export const counterAction = counterSlice.actions
