import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:"Time"
}

export const content_counter_slice=createSlice({
    name:"content",
    initialState,
    reducers:{
        change_to_time:(state)=>{
            state.value="Time"
        },
        change_to_calender:(state)=>{
            state.value="Calender"
        },
        change_to_Stopwatch:(state)=>{
            state.value="Stop Watch"
        }
    }
})

export const {change_to_Stopwatch,change_to_time,change_to_calender} = content_counter_slice.actions

export default content_counter_slice.reducer