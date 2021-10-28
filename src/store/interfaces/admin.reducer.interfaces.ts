import { IUser } from "../../interfaces/user.interfaces";

export interface IAdminState {
	isUsersFetching: boolean;
	isLoading: boolean;
	users: IUser[];
}

export interface IChangePasswordRequestData {
	password: string;
}
