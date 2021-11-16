import { FC } from "react";
import { Formik, Form } from "formik";
import { Box, Typography, TextField, Button } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

import { useStyles } from "./AddUserForm.styles";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../store/hooks/store.hooks";

import { addUserRequest } from "../../../store/reducers/admin.reducer";

import { ADD_USER_FORM_VALUE } from "./AddUserForm.constants";
import { addUserFormValidation } from "./AddUserForm.validation";

const AddUserForm: FC = () => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isLoading } = useAppSelector(({ admin }) => admin);

	return (
		<Box className={classes.addUser}>
			<Typography
				variant="h5"
				component="h3"
				className={classes.addUserHeading}
			>
				Добавить пользователя
			</Typography>
			<Formik
				initialValues={ADD_USER_FORM_VALUE}
				validationSchema={addUserFormValidation}
				onSubmit={(values) => {
					dispatch(
						addUserRequest(values.username.trim(), values.password)
					);

					values.username = "";
					values.password = "";
				}}
			>
				{({ values, touched, errors, handleChange }) => (
					<Form className={classes.addUserForm} noValidate>
						<TextField
							name="username"
							value={values.username}
							label="Имя пользователя"
							size="small"
							variant="outlined"
							className={classes.addUserFormField}
							error={touched.username && Boolean(errors.username)}
							helperText={touched.username && errors.username}
							onChange={handleChange}
							disabled={isLoading}
						/>
						<TextField
							type="password"
							name="password"
							value={values.password}
							label="Пароль"
							size="small"
							variant="outlined"
							className={classes.addUserFormField}
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
							onChange={handleChange}
							disabled={isLoading}
						/>
						<Button
							type="submit"
							size="small"
							color="info"
							variant="contained"
							startIcon={<PersonAdd />}
							disabled={isLoading}
						>
							Добавить
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default AddUserForm;
