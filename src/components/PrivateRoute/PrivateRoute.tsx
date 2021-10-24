import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/store.hooks";

import { PrivateRouteProps } from "./PrivateRoute.interfaces";

const PrivateRoute: FC<PrivateRouteProps> = ({
	component: Component,
	allowedRole,
	...restProps
}) => {
	const { isAuth, user } = useAppSelector(({ user }) => user);

	const isAllowed = isAuth && user && user.roles.includes(allowedRole);

	if (isAllowed) {
		return <Route {...restProps} component={Component} />;
	}

	return <Redirect to="/login" />;
};

export default PrivateRoute;
