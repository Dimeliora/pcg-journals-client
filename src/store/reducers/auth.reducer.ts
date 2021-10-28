import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";

import { showAlert } from "./ui.reducer";

import {
	ILoginRequestData,
	ILoginResponseData,
	IAuthState,
} from "../interfaces/auth.reducer.interfaces";
import { AxiosErrorMessage } from "../../interfaces/axios.interfaces";
import { IUser } from "../../interfaces/user.interface";
import { AppThunk } from "../interfaces/store.types";

const initialState: IAuthState = {
	isLoading: false,
	isAuth: null,
	user: null,
};

const authReducer = createSlice({
	name: "auth",
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
	authReducer.actions;

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
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export const userLogout = (): AppThunk => (dispatch) => {
	localStorage.removeItem("access_token");

	dispatch(logout());
};

export default authReducer.reducer;
