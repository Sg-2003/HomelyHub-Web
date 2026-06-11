import {createSlice} from "@reduxjs/toolkit"

const propertSlice = createSlice({
    name: "property",
    initialState: {
        properties: [],
        totalProperties: 0,
        searchParams: {},
        error: null,
        loading: false
    },
    reducers:{
        getRequest(state) {
            state.loading = true
        },
        getProperties(state, action) {
            state.properties = (action.payload && action.payload.data) || [];
            state.totalProperties = (action.payload && action.payload.all_properties) || 0;
            state.loading = false;
        },
        updateSearchParams:(state, action) =>{
            state.searchParams = Object.keys(action.payload).length === 0 ? {} : {
                ...state.searchParams,
                ...action.payload
        }
        },
        getErrors(state, action){
            state.error = action.payload;
            state.loading = false;
        }
    }
})
export const propertyAction = propertSlice.actions;
export default propertSlice