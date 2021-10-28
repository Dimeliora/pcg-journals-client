import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";
import { showAlert } from "./ui.reducer";

import { AppThunk } from "../interfaces/store.types";
import {
	IAdminState,
	IChangePasswordRequestData,
} from "../interfaces/admin.reducer.interfaces";
import { IUser } from "../../interfaces/user.interface";
import {
	AxiosErrorMessage,
	IResponseMessage,
} from "../../interfaces/axios.interfaces";

const initialState: IAdminState = {
	isLoading: true,
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
		setUsers(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false;
			state.users = action.payload;
		},
	},
});

export const { setLoading, resetLoading, setUsers } = adminReducer.actions;

export const getUsers = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.get<IUser[]>(`${BASE_URL}/users`, config);

		dispatch(setUsers(data));
	} catch (error) {
		dispatch(resetLoading());

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

export default adminReducer.reducer;
