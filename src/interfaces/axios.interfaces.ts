import { AxiosError } from "axios";

export interface IResponseMessage {
	message: string;
}

export type AxiosErrorMessage = AxiosError<IResponseMessage>;
