interface UserRole {
	value: Roles;
	description: string;
}

export enum Roles {
	USER = "USER",
	SUPERVISOR = "SUPERVISOR",
	ADMIN = "ADMIN",
}

export interface IUser {
	_id: string;
	username: string;
	roles: UserRole[];
}
