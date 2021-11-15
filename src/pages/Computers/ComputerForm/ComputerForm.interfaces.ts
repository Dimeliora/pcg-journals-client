import { IComputer } from "../../../interfaces/computer.interface";

export type AddComputerFormValues = Omit<
	IComputer,
	| "_id"
	| "ramTotalSize"
	| "cpuUpgrade"
	| "ramUpgrade"
	| "hddUpgrade"
	| "updatedAt"
	| "lastModifier"
>;

