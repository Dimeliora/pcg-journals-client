import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Computers from "../pages/Computers/Computers";
import Dashboard from "../pages/Dashboard/Dashboard";

import { Roles } from "../interfaces/roles.enum";

const App: FC = () => {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<PrivateRoute allowedRole={Roles.USER} path="/" component={Home} exact />
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
		</Switch>
	);
};

export default App;
