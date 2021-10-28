import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";
import { showAlert } from "./ui.reducer";

import { AppThunk } from "../interfaces/store.types";
import { IUser } from "../../interfaces/user.interfaces";
import {
	IAdminState,
	IChangePasswordRequestData,
} from "../interfaces/admin.reducer.interfaces";
import {
	AxiosErrorMessage,
	IResponseMessage,
} from "../../interfaces/axios.interfaces";

const initialState: IAdminState = {
	isUsersFetching: false,
	isLoading: false,
	users: [],
};

const adminReducer = createSlice({
	name: "admin",
	initialState,
	reducers: {
		setUserFetching(state) {
			state.isUsersFetching = true;
		},
		resetUserFetching(state) {
			state.isUsersFetching = false;
		},
		setLoading(state) {
			state.isLoading = true;
		},
		resetLoading(state) {
			state.isLoading = false;
		},
		setUsers(state, action: PayloadAction<IUser[]>) {
			state.isUsersFetching = false;
			state.users = action.payload;
		},
		deleteUser(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.users = state.users.filter((user) => user._id !== action.payload);
		},
	},
});

const {
	setUserFetching,
	resetUserFetching,
	setLoading,
	resetLoading,
	setUsers,
	deleteUser,
} = adminReducer.actions;

export const getUsers = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setUserFetching());

		const config = getAuthConfig();
		const { data } = await axios.get<IUser[]>(`${BASE_URL}/users`, config);

		dispatch(setUsers(data));
	} catch (error) {
		dispatch(resetUserFetching());

		const axiosError = error as AxiosErrorMessage;
		if (axiosError.response) {
			dispatch(showAlert(axiosError.response.data.message, "error"));
		}
	}
};

export const changeUserPassword =
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
			dispatch(resetLoading());

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

			dispatch(deleteUser(userId));
			dispatch(showAlert(data.message, "success"));
		} catch (error) {
			dispatch(resetLoading());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export default adminReducer.reducer;
