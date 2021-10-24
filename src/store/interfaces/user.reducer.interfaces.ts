import { User } from "../../interfaces/user.interface";

export interface UserState {
	isLoading: boolean;
	isAuth: boolean;
	user: User | null;
}

export interface LoginData {
	accessToken: string;
	user: User;
}
