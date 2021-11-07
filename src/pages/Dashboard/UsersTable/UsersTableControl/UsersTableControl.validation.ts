import * as yup from "yup";

export const usersTableControlFormValidation = yup.object().shape({
	password: yup
		.string()
		.required("Поле обязательно для заполнения")
		.min(6, "Пароль должен быть не короче 6 символов")
		.max(16, "Пароль не должен быть длиннее 16 символов"),
});
