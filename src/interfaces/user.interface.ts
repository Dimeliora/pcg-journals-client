import { Roles } from "./roles.enum";

export interface IUser {
	id: string;
	username: string;
	roles: Roles[];
}
