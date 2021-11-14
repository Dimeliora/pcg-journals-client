import { IComputer } from "../../../../interfaces/computer.interface";

export interface IComputerInfoSectionProps {
	computer?: IComputer;
	terms?: { [key: string]: string };
}
