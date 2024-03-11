import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
    'get/Countries',
    async () => {
        let res = await axios.get(' https://restcountries.com/v3.1/all');
        return res.data
    }
)
export const searchFlag = createAsyncThunk(
    'search/Countries',
    async (data)=>{
        return data
    }
)
