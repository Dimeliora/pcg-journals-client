import { FC } from "react";
import { Formik, Form } from "formik";

import { Box, TextField, Button } from "@mui/material";
import { Edit, PersonRemove } from "@mui/icons-material";

import { useStyles } from "./UserTableControl.styles";

import { USER_TABLE_CONTROL_FORM_VALUE } from "./UserTableControl.constants";
import { UserTableControlFormValidation } from "./UserTableControl.validation";

import { IUserTableControlProps } from "./UserTableControl.interfaces";

const UserTableControl: FC<IUserTableControlProps> = ({ isAdmin }) => {
	const classes = useStyles();

	const deleteUserClickHandler = (): void => {};

	return (
		<Box className={classes.userTableControl}>
			<Formik
				initialValues={USER_TABLE_CONTROL_FORM_VALUE}
				validationSchema={UserTableControlFormValidation}
				onSubmit={(values) => {
					console.log(values.password);
				}}
			>
				{({ values, touched, errors, handleChange }) => (
					<Form className={classes.userTableForm}>
						<TextField
							type="password"
							name="password"
							value={values.password}
							label="Новый пароль"
							size="small"
							variant="standard"
							className={classes.userTablePasswordInput}
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							size="small"
							color="info"
							variant="contained"
							endIcon={<Edit />}
						>
							Изменить
						</Button>
					</Form>
				)}
			</Formik>
			{!isAdmin && (
				<Button
					size="small"
					color="error"
					variant="contained"
					className={classes.userTableRemoveButton}
					endIcon={<PersonRemove />}
					onClick={deleteUserClickHandler}
				>
					Удалить
				</Button>
			)}
		</Box>
	);
};

export default UserTableControl;
