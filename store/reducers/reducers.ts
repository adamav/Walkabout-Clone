import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "./account/account.reducer";


const reducers = combineReducers({

   

    account: accountReducer
    
})



export default reducers;