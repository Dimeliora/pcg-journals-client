import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";
import { showAlert } from "./ui.reducer";

import { AppThunk } from "../interfaces/store.types";
import { IAdminState } from "../interfaces/admin.reducer.interfaces";
import { IUser } from "../../interfaces/user.interface";
import { AxiosErrorMessage } from "../../interfaces/axios.interfaces";

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
			dispatch(showAlert(axiosError.response.data.message));
		}
	}
};

export default adminReducer.reducer;
