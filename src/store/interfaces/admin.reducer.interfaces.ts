import { IUser } from "../../interfaces/user.interface";

export interface IAdminState {
	isLoading: boolean;
	users: IUser[];
}

export interface IChangePasswordRequestData {
	password: string;
}