import { IUser } from "../../interfaces/user.interface";

export interface IUserState {
	isLoading: boolean;
	isAuth: boolean | null;
	user: IUser | null;
}

export interface ILoginData {
	access_token: string;
	user: IUser;
}
