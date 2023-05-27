import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchUsers = createAsyncThunk("users/fetchUsers", async(thunkApi)=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
  
    return data;
 
})
type initialState = {
    entities:string[] ,
    loading: boolean,
   
} 
const initialState:initialState = {
    entities:[] ,
    loading: false,
   
}

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.entities.push(...action.payload )
        } );
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.loading = true;
          
        } );



    },
})

export default UserSlice.reducer;