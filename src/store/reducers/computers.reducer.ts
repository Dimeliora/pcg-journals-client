import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL, getAuthConfig } from "../../configs/axios.configs";

import { showAlert } from "./ui.reducer";

import {
	IComputersState,
} from "../interfaces/computers.reducer.interface";
import { AxiosErrorMessage } from "../../interfaces/axios.interfaces";
import { IComputer } from "../../interfaces/computer.interface";
import { AppThunk } from "../interfaces/store.types";

const initialState: IComputersState = {
	isLoading: false,
	isError: false,
	computers: [],
};

const computersReducer = createSlice({
	name: "computers",
	initialState,
	reducers: {
		setLoading(state) {
			state.isLoading = true;
		},
		setError(state) {
			state.isLoading = false;
			state.isError = true;
		},
		setComputers(state, action: PayloadAction<IComputer[]>) {
			state.isLoading = false;
			state.computers = action.payload;
		},
	},
});

const { setLoading, setError, setComputers } = computersReducer.actions;

export const getAllComputers = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.get<IComputer[]>(
			`${BASE_URL}/computers`,
			config
		);
		console.log(data);

		dispatch(setComputers(data));
	} catch (error) {
		dispatch(setError());

		const axiosError = error as AxiosErrorMessage;
		if (axiosError.response) {
			dispatch(showAlert(axiosError.response.data.message, "error"));
		}
	}
};

export default computersReducer.reducer;
