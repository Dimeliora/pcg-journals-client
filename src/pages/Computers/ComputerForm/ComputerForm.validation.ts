import * as yup from "yup";

export const computerFormValidation = yup.object().shape({
	pcType: yup.string().required("Поле обязательно для заполнения"),
	pcName: yup.string().required("Поле обязательно для заполнения"),
	pcPurpose: yup.string().required("Поле обязательно для заполнения"),
});
