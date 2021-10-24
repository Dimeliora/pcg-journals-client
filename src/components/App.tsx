import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Computers from "../pages/Computers";
import Dashboard from "../pages/Dashboard";
import Layout from "./Layout/Layout";

const App: FC = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/computers" component={Computers} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</Layout>
	);
};

export default App;
