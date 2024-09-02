import { configureStore } from "@reduxjs/toolkit";
import checkProfileReducer from "../feature/checkProfile/checkProfileSlice";
import followingAccountReducer from "../feature/followingAccounts/followingAccountSlice";
import followingPostReducer from "../feature/followingPost/followingPostSlice";

export const store = configureStore({
    reducer: {
        followingPostReducer: followingPostReducer,
        followingAccountReducer: followingAccountReducer,
        checkProfileReducer: checkProfileReducer,
    },
});