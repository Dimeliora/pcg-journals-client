export interface IComputerInfoNestedProps<T> {
	title: string;
	items: T[];
	terms: { [key: string]: string };
}
