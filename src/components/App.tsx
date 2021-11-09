import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Alerts from "./Alerts/Alerts";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Computers from "../pages/Computers/Computers";

import { Roles } from "../interfaces/user.interfaces";

const App: FC = () => {
	return (
		<Layout>
			<Alerts />
			<Switch>
				<Route path="/login" component={Login} />
				<PrivateRoute
					allowedRole={Roles.USER}
					path="/"
					component={Home}
					exact
				/>
				<PrivateRoute
					allowedRole={Roles.ADMIN}
					path="/dashboard"
					component={Dashboard}
				/>
				<PrivateRoute
					allowedRole={Roles.USER}
					path="/computers"
					component={Computers}
				/>
			</Switch>
		</Layout>
	);
};

export default App;
