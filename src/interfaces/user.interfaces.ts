import { Roles } from "./roles.enum";

interface UserRole {
	value: Roles;
	description: string;
}

export interface IUser {
	_id: string;
	username: string;
	roles: UserRole[];
}
