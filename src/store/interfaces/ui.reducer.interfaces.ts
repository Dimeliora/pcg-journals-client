import { AlertSeverity } from "../../interfaces/alert.types";

export interface IAlert {
	id: string;
	message: string;
	severity: AlertSeverity;
}

export interface IUIState {
	alerts: IAlert[];
}
