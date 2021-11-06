import { IComputer } from "../../interfaces/computer.interface";

export interface IComputersState {
	isLoading: boolean;
	isError: boolean;
	computers: IComputer[];
}
