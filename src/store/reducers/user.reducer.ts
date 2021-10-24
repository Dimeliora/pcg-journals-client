import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "../interfaces/user.reducer.interfaces";
import { User } from "../../interfaces/user.interface";

const initialState: UserState = {
	isLoading: true,
	isAuth: false,
	user: null,
};

const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLoading(state) {
			state.isLoading = true;
		},
		resetLoading(state) {
			state.isLoading = false;
		},
		setUser(state, action: PayloadAction<User>) {
			state.isLoading = false;
			state.isAuth = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isLoading = false;
			state.isAuth = false;
			state.user = null;
		},
	},
});

export const { setLoading, resetLoading, setUser, logout } =
	userReducer.actions;

export default userReducer.reducer;
