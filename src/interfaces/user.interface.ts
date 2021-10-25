import { Roles } from "./roles.enum";

interface UserRole {
	value: Roles;
	description: string;
}

export interface IUser {
	id: string;
	username: string;
	roles: UserRole[];
}
