import {createSlice} from '@reduxjs/toolkit' 
const initialState={
    value_one:0,
    value_five:0,
}
const counteSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment_one:(state,action)=>{
            state.value_one = state.value_one+1;
        },
        decrement_one:(state,action)=>{
            state.value_one = state.value_one-1;
        },
        increment_five:(state,action)=>{
            state.value_five = state.value_five +5;
        },
        decrement_five:(state,action)=>{
            state.value_five = state.value_five -5;
        },
    }
})

export const {increment_five,increment_one,decrement_five,decrement_one} = counteSlice.actions
export {counteSlice}