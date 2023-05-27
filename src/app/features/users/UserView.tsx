"use client"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect, useRef } from "react"

import { fetchUsers } from "./UserSlice"
   


const UserView = ()=>{

const ref = useRef (false);
const {entities, loading}= useAppSelector ((state) => state.Users);
const dispatch = useAppDispatch();

useEffect( ()=>{
    if (ref.current=== false){
        dispatch (fetchUsers ())

    }
return  ()=>{
    ref.current = true;
}
}, []);

return  (

    <div className = " mt-12">

        <h1 className = "text-3xl font-bold underline "> User Data Fetched through createAsyncThunk  </h1>
        {
            loading ?  (<h1>loading....</h1>): (entities?.map ((user:any)=> <h3 key = {user.id}>{user.name}</h3>))
        }



    </div>
)


}


export default UserView;