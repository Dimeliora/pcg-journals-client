import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user.reducer";
import uiReducer from "./reducers/ui.reducer";

const store = configureStore({
	reducer: {
		user: userReducer,
		ui: uiReducer,
	},
});

export default store;
