import { RouteProps } from "react-router-dom";
import { Roles } from "../../interfaces/roles.enum";

export interface PrivateRouteProps extends RouteProps {
	allowedRole: Roles;
}
