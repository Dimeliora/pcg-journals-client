import { RouteProps } from "react-router-dom";
import { Roles } from "../../interfaces/user.interfaces";

export interface PrivateRouteProps extends RouteProps {
	allowedRole: Roles;
}
