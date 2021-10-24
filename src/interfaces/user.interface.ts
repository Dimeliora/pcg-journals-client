import { Roles } from "./roles.enum";

export interface User {
	id: string;
	username: string;
	roles: Roles[];
}
