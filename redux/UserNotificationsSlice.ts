import { createSlice } from "@reduxjs/toolkit"

interface userNots {
    notifications: number
}


const UserNotificationsSlice = createSlice({
    name: "userNotifications",
    initialState: 5,
    reducers: {
        incrementNotifications: (state, action) => {
            return state + 1;
        }
    }
})


export const { incrementNotifications } = UserNotificationsSlice.actions

export default UserNotificationsSlice.reducer