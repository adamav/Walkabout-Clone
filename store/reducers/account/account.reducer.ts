import { createReducer } from "@reduxjs/toolkit";
import { AccountInterface } from "./account.interface";
import { login } from "./account.actions";

const initialState : AccountInterface = {

    isLoggedIn : false
}


const accountReducer = createReducer(initialState, builder =>{

    builder.addCase(login.pending, (state, action) =>{

       return state;

    })
    .addCase(login.fulfilled, (state, action) =>{
        
        return {isLoggedIn:true}
    })
    .addCase(login.rejected, (state, action) =>{
        
        return {isLoggedIn:false}
    })

})

export default accountReducer;