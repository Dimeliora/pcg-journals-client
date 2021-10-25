import { AxiosError } from "axios";

import { IUser } from "../../interfaces/user.interface";

interface IErrorMessage {
	message: string;
}

export interface IUserState {
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

export type AxiosErrorMessage = AxiosError<IErrorMessage>;
