import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";

import { UserState, LoginData } from "../interfaces/user.reducer.interfaces";
import { User } from "../../interfaces/user.interface";
import { AppThunk } from "../interfaces/store.types";

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

export const userAuth = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.get<LoginData>(`${BASE_URL}/auth`, config);

		localStorage.setItem("access_token", data.accessToken);

		dispatch(setUser(data.user));
	} catch (error) {
		localStorage.removeItem("access_token");

		dispatch(resetLoading());

		console.log(error);
	}
};

export default userReducer.reducer;
