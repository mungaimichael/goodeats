import { createSlice } from "@reduxjs/toolkit";



interface userDetailsInt {
    name: string,
    email: string,
    password: string
}
const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        name: '',
        email: '',
        password: ''
    } as userDetailsInt,

    reducers: {
        initNewUser: (state, action) => {
            const { name, email, password } = action.payload;
            state.name = name;
            state.email = email;
            state.password = password
        }
    }
})

export const { initNewUser } = userDetailsSlice.actions;

export default userDetailsSlice.reducer; 