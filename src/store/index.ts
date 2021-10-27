import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth.reducer";
import uiReducer from "./reducers/ui.reducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
		ui: uiReducer,
	},
});

export default store;
