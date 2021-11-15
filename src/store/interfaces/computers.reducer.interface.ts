import { IComputer } from "../../interfaces/computer.interfaces";

export interface IComputersState {
	isLoading: boolean;
	isError: boolean;
	computers: IComputer[];
}
