import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./UserDetailsSlice"
import UserNotificationsSlice from "./UserNotificationsSlice";
import DataFetchSlice from "./DataFetchSlice";

export default configureStore({
    reducer: {
        userDetails: userDetailsReducer,
        userNotifications: UserNotificationsSlice,
        queryData: DataFetchSlice
    }
})