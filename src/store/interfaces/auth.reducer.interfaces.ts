import { IUser } from "../../interfaces/user.interface";

export interface IAuthState {
	isLoading: boolean;
	isAuth: boolean | null;
	user: IUser | null;
}

export interface ILoginRequestData {
	username: string;
	password: string;
}

export interface ILoginResponseData {
	access_token: string;
	user: IUser;
}
