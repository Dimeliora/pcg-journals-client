import { FC, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/hooks/store.hooks";
import { userAuth } from "../../store/reducers/user.reducer";

import Spinner from "../Spinner/Spinner";

import { PrivateRouteProps } from "./PrivateRoute.interfaces";

const PrivateRoute: FC<PrivateRouteProps> = ({
	component: Component,
	allowedRole,
	location,
	...restProps
}) => {
	const dispatch = useAppDispatch();

	const { isAuth, user } = useAppSelector(({ user }) => user);

	useEffect(() => {
		if (isAuth === null) {
			dispatch(userAuth());
		}
	}, [dispatch, isAuth]);

	const isAllowed =
		user && user.roles.some((role) => role.value === allowedRole);

	if (isAuth === null) {
		return <Spinner />;
	}

	if (isAuth && isAllowed) {
		return <Route {...restProps} component={Component} />;
	}

	if (isAuth && !isAllowed) {
		return <Redirect to="/" />;
	}

	return (
		<Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>
	);
};

export default PrivateRoute;
