import { configureStore } from "@reduxjs/toolkit";
import content_controler_slice from "../features/slices/content_controler_slice";


export const store=configureStore({
    reducer:{
        content:content_controler_slice
    }
})