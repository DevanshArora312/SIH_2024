import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chain : "ethereum"
}

const slice = createSlice({
    name : "blockChain",
    initialState,
    reducers : {
        setBlockChain : (state,action) => {
            state.chain = action.payload
        },
        
        
    }
}) 

export const {setBlockChain} = slice.actions;
export default slice.reducer;