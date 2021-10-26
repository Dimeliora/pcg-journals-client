export interface IAlert {
	id: string;
	message: string;
}

export interface IUIState {
	alerts: IAlert[];
}
