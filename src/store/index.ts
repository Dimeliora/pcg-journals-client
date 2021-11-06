import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth.reducer";
import uiReducer from "./reducers/ui.reducer";
import adminReducer from "./reducers/admin.reducer";
import computersReducer from "./reducers/computers.reducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
		ui: uiReducer,
		admin: adminReducer,
		computers: computersReducer,
	},
});

export default store;
