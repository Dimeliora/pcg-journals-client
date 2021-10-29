import * as yup from "yup";

export const addUserFormValidation = yup.object().shape({
	username: yup.string().required("Поле обязательно для заполнения"),
	password: yup
		.string()
		.required("Поле обязательно для заполнения")
		.min(6, "Пароль должен быть не короче 6 символов")
		.max(16, "Пароль не должен быть длиннее 16 символов"),
});
