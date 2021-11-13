import { ChangeEvent } from "react";
import { FormikTouched, FormikErrors } from "formik";

import { ADD_COMPUTER_FORM_VALUES } from "../ComputerForm.constants";

export interface IComputerFormSectionsProps {
	values: typeof ADD_COMPUTER_FORM_VALUES;
	handleChange: {
		(e: ChangeEvent<any>): void;
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void;
	};
	touched?: FormikTouched<typeof ADD_COMPUTER_FORM_VALUES>;
	errors?: FormikErrors<typeof ADD_COMPUTER_FORM_VALUES>;
}
