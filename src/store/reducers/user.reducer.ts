import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";

import {
	ILoginRequestData,
	ILoginResponseData,
	IUserState,
	AxiosErrorMessage,
} from "../interfaces/user.reducer.interfaces";
import { IUser } from "../../interfaces/user.interface";
import { AppThunk } from "../interfaces/store.types";

const initialState: IUserState = {
	isLoading: false,
	isAuth: null,
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
		resetAuth(state) {
			state.isAuth = false;
		},
		setUser(state, action: PayloadAction<IUser>) {
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

export const { setLoading, resetLoading, resetAuth, setUser, logout } =
	userReducer.actions;

export const userAuth = (): AppThunk => async (dispatch) => {
	try {
		const config = getAuthConfig();
		const { data } = await axios.get<ILoginResponseData>(
			`${BASE_URL}/auth`,
			config
		);

		localStorage.setItem("access_token", data.access_token);

		dispatch(setUser(data.user));
	} catch (error) {
		localStorage.removeItem("access_token");

		dispatch(resetAuth());

		const axiosError = error as AxiosErrorMessage;
		console.log(axiosError.response?.data.message);
	}
};

export const userLogin =
	(username: string, password: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(setLoading());

			const { data } = await axios.post<
				ILoginRequestData,
				AxiosResponse<ILoginResponseData>
			>(`${BASE_URL}/auth/login`, {
				username,
				password,
			});

			localStorage.setItem("access_token", data.access_token);

			dispatch(setUser(data.user));
		} catch (error) {
			dispatch(resetLoading());

			const axiosError = error as AxiosErrorMessage;
			console.log(axiosError.response?.data.message);
		}
	};

export const userLogout = (): AppThunk => (dispatch) => {
	localStorage.removeItem("access_token");

	dispatch(logout());
};

export default userReducer.reducer;
