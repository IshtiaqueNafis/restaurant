import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addRestraduantData, getRestaurantData} from "../../firebase/firebaseConfig";

export const getResturdantDataAsync = createAsyncThunk(
    'restrudant/getdata',
    async (_, thunkApi) => {
        try {

            return await getRestaurantData()
        } catch (e) {
            thunkApi.rejectWithValue(e.message);
        }
    }
);
export const createRestraduantAsync = createAsyncThunk(
    'restrudant/adddata',
    async ({data, location}, thunkApi) => {
        try {
            await addRestraduantData(data, location);
        } catch (e) {
            thunkApi.rejectWithValue(e.message);
        }
    }
);

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurantsData: [],
        loading: false,
        error: null,
        location: null
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        resetLocation: (state) => {
            state.location = null
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getResturdantDataAsync.fulfilled, (state, action) => {
            state.loading = false
            state.restaurantsData = action.payload;
            state.error = null;
        })
        builder.addCase(getResturdantDataAsync.pending, (state, action) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(getResturdantDataAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(createRestraduantAsync.fulfilled, (state, action) => {
            state.loading = false
            state.error = null;
        })

        builder.addCase(createRestraduantAsync.pending, (state, action) => {
            state.loading = true
            state.error = null;
        })

        builder.addCase(createRestraduantAsync.rejected, (state, action) => {
            state.loading = false
            state.error = null;
        })

    }
})
export const {setLocation,resetLocation} = restaurantSlice.actions

export const restaurantReducer = restaurantSlice.reducer;
