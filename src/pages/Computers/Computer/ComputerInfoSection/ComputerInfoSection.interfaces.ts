import { IComputer } from "../../../../interfaces/computer.interfaces";

export interface IComputerInfoSectionProps {
	computer?: IComputer;
	terms?: { [key: string]: string };
}
