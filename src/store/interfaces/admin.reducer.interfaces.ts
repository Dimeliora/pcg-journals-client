import { IUser } from "../../interfaces/user.interfaces";

export interface IAdminState {
	isLoading: boolean;
	isError: boolean;
	users: IUser[];
}

export interface IAddUserRequestData {
	username: string;
	password: string;
}

export type IChangePasswordRequestData = Pick<IAddUserRequestData, "password">;
