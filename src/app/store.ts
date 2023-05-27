import {configureStore} from "@reduxjs/toolkit"

import CakeReducer from "./features/cake/CakeSlice";
import Userreducer from "./features/users/UserSlice";




const store = configureStore({
reducer:{
cake:CakeReducer,
Users:Userreducer
}

})


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;