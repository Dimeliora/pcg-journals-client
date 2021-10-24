import { IUser } from "../../interfaces/user.interface";

export interface IUserState {
	isLoading: boolean;
	isAuth: boolean;
	user: IUser | null;
}

export interface ILoginData {
	accessToken: string;
	user: IUser;
}
