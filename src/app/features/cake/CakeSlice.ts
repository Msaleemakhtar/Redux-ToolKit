import {createSlice, PayloadAction } from "@reduxjs/toolkit";


type initialState = {   
    noOfCakes: number
}
 


const initialState:initialState = {
    noOfCakes: 20
}


const CakeSlice = createSlice({

    name: "cake", 
    initialState,
    reducers:{
        ordered: state => {
            state.noOfCakes --
        },
        restocked:(state, action:PayloadAction<number>)=>{
            state.noOfCakes += action.payload
        },

    }
}) 


export default CakeSlice.reducer

export const {ordered, restocked} = CakeSlice.actions