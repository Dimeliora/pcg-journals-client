import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import { AppThunk } from "./../interfaces/store.types";
import { IAlert, IUIState } from "./../interfaces/ui.reducer.interfaces";

const SHOW_ALERT_DELAY = 5000;
const initialState: IUIState = {
	alerts: [],
};

const uiReducer = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setAlert(state, action: PayloadAction<IAlert>) {
			state.alerts.push(action.payload);
		},
		resetAlert(state, action: PayloadAction<string>) {
			state.alerts = state.alerts.filter(
				(alert) => alert.id !== action.payload
			);
		},
	},
});

export const { setAlert, resetAlert } = uiReducer.actions;

export const showAlert =
	(message: string): AppThunk =>
	(dispatch) => {
		const id = v4();

		dispatch(setAlert({ id, message }));

		setTimeout(() => {
			dispatch(resetAlert(id));
		}, SHOW_ALERT_DELAY);
	};

export default uiReducer.reducer;
