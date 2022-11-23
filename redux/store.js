import { configureStore } from '@reduxjs/toolkit'

import {restaurantReducer} from "./reducer/restraduantSliceReducer";
import {logger} from "redux-logger/src";

export const store= configureStore({
    reducer:{
        restaurants:restaurantReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
})
