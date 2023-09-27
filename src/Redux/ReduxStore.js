import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./Slice/FirstSlice";

export const ReduxStore = configureStore({
    reducer: {firstSlice},

});

