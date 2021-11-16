import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { getAuthConfig } from "../../configs/axios.configs";

import { showAlert } from "./ui.reducer";

import { IComputersState } from "../interfaces/computers.reducer.interface";
import {
	AxiosErrorMessage,
	IResponseMessage,
} from "../../interfaces/axios.interfaces";
import {
	IComputer,
	AddComputerData,
} from "../../interfaces/computer.interfaces";
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
		const { data } = await axios.get<IComputer[]>(`computers`, config);

		dispatch(setComputers(data));
	} catch (error) {
		dispatch(setError());

		const axiosError = error as AxiosErrorMessage;
		if (axiosError.response) {
			dispatch(showAlert(axiosError.response.data.message, "error"));
		}
	}
};

export const deleteComputerRequest =
	(computerId: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(setLoading());

			const config = getAuthConfig();
			const { data } = await axios.delete<IResponseMessage>(
				`computers/${computerId}`,
				config
			);

			dispatch(getAllComputers());
			dispatch(showAlert(data.message, "success"));
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export const createComputerRequest =
	(computerData: AddComputerData): AppThunk =>
	async (dispatch) => {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.post<
			AddComputerData,
			AxiosResponse<IResponseMessage>
		>(`computers`, computerData, config);

		dispatch(getAllComputers());
		dispatch(showAlert(data.message, "success"));
		try {
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export const updateComputerRequest =
	(computerId: string, computerData: AddComputerData): AppThunk =>
	async (dispatch) => {
		dispatch(setLoading());

		const config = getAuthConfig();
		const { data } = await axios.patch<
			AddComputerData,
			AxiosResponse<IResponseMessage>
		>(`computers/${computerId}`, computerData, config);

		dispatch(getAllComputers());
		dispatch(showAlert(data.message, "success"));
		try {
		} catch (error) {
			dispatch(setError());

			const axiosError = error as AxiosErrorMessage;
			if (axiosError.response) {
				dispatch(showAlert(axiosError.response.data.message, "error"));
			}
		}
	};

export default computersReducer.reducer;
