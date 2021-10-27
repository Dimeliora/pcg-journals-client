import { AxiosError } from "axios";

interface IErrorMessage {
	message: string;
}

export type AxiosErrorMessage = AxiosError<IErrorMessage>;
