import {createSlice} from "@reduxjs/toolkit";
import {getCountries, searchFlag} from "../services/countriesService";

let initialState = {
    countries: [],
    searchCountries :''
}
let countriesSlice = createSlice({
    name: 'countries',
    initialState,
    extraReducers: builder => {
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.countries = action.payload
        })
        builder.addCase(searchFlag.fulfilled , (state , action) =>{
            state.searchCountries = action.payload
        })
    }
})
export default countriesSlice.reducer