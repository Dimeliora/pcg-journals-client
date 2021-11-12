import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";
import { showAlert } from "./ui.reducer";

import { AppThunk } from "../interfaces/store.types";
import { IUser } from "../../interfaces/user.interfaces";
import {
	IAdminState,
	IAddUserRequestData,
	IChangePasswordRequestData,
} from "../interfaces/admin.reducer.interfaces";
import {
	AxiosErrorMessage,
	IResponseMessage,
} from "../../interfaces/axios.interfaces";

const initialState: IAdminState = {
	isLoading: false,
	isError: false,
	users: [],
};

const adminReducer = createSlice({
	name: "admin",
	initialState,
	reducers: {
		setLoading(state) {
			state.isLoading = true;
		},
		resetLoading(state) {
			state.isLoading = false;
		},
		setError(state) {
			state.isLoading = false;
			state.isError = true;
		},
		setUsers(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false;
			state.users = action.payload;
		},
	},
});

const { setLoading, resetLoading, setError, setUsers } = adminReducer.actions;

export const getUsersRequest = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.get<IUser[]>(`${BASE_URL}/users`, config);

		dispatch(setUsers(data));
	} catch (error) {
		dispatch(setError());

		const axiosError = error as AxiosErrorMessage;
		if (axiosError.response) {
			dispatch(showAlert(axiosError.response.data.message, "error"));
		}
	}
};

export const addUserRequest =
	(username: string, password: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(setLoading());

			const config = getAuthConfig();
			const { data } = await axios.post<
				IAddUserRequestData,
				AxiosResponse<IUser>
			>(
				`${BASE_URL}/auth/register`,
				{
					username,
					password,
				},
				config
			);

			dispatch(getUsersRequest());
			dispatch(
				showAlert(`Пользователь ${data.username} добавлен`, "success")
			);
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export const changeUserPasswordRequest =
	(userId: string, password: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(setLoading());

			const config = getAuthConfig();
			const { data } = await axios.patch<
				IChangePasswordRequestData,
				AxiosResponse<IResponseMessage>
			>(`${BASE_URL}/users/${userId}`, { password }, config);

			dispatch(resetLoading());
			dispatch(showAlert(data.message, "success"));
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export const deleteUserRequest =
	(userId: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(setLoading());

			const config = getAuthConfig();
			const { data } = await axios.delete<IResponseMessage>(
				`${BASE_URL}/users/${userId}`,
				config
			);

			dispatch(getUsersRequest());
			dispatch(showAlert(data.message, "success"));
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export default adminReducer.reducer;
