import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "./account.api";

export const login = createAsyncThunk(
    'account/login',
    loginAPI

)