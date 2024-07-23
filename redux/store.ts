import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./UserDetailsSlice"
import UserNotificationsSlice from "./UserNotificationsSlice";

export default configureStore({
    reducer: {
        userDetails: userDetailsReducer,
        userNotifications: UserNotificationsSlice
    }
})