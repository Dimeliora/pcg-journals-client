import { IUser } from "../../interfaces/user.interface";

export interface IAdminState {
	isLoading: boolean;
	users: IUser[];
}
