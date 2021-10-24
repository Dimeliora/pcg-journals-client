import { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useAppDispatch } from "../store/hooks/store.hooks";
import { userAuth } from "../store/reducers/user.reducer";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Computers from "../pages/Computers";
import Dashboard from "../pages/Dashboard";
import Layout from "./Layout/Layout";

import { Roles } from "../interfaces/roles.enum";

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userAuth());
	}, [dispatch]);

	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Layout>
				<PrivateRoute
					allowedRole={Roles.USER}
					path="/"
					component={Home}
					exact
				/>
				<PrivateRoute
					allowedRole={Roles.USER}
					path="/computers"
					component={Computers}
				/>
				<PrivateRoute
					allowedRole={Roles.ADMIN}
					path="/dashboard"
					component={Dashboard}
				/>
			</Layout>
		</Switch>
	);
};

export default App;
