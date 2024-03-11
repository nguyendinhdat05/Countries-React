import {configureStore} from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";

export let store = configureStore({
    reducer: {
        countries: countriesReducer
    }
})