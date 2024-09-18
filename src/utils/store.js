import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        auth: authSlice,
    },
});

    export default store; 