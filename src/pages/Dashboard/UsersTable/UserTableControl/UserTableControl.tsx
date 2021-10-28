import { FC, useState } from "react";
import { Formik, Form } from "formik";
import {
	Box,
	TextField,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import { Edit, PersonRemove } from "@mui/icons-material";

import { useStyles } from "./UserTableControl.styles";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../store/hooks/store.hooks";

import { changeUserPassword } from "../../../../store/reducers/admin.reducer";

import { USER_TABLE_CONTROL_FORM_VALUE } from "./UserTableControl.constants";
import { UserTableControlFormValidation } from "./UserTableControl.validation";

import { IUserTableControlProps } from "./UserTableControl.interfaces";
import { Roles } from "../../../../interfaces/roles.enum";

const UserTableControl: FC<IUserTableControlProps> = ({ user }) => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isLoading } = useAppSelector(({ admin }) => admin);

	const [isDeleteOpened, setIsDeleteOpened] = useState<boolean>(false);

	const openDeleteDialogHandler = (): void => {
		setIsDeleteOpened(true);
	};

	const closeDeleteDialogHandler = (): void => {
		setIsDeleteOpened(false);
	};

	const DeleteUserHandler = (): void => {
		setIsDeleteOpened(false);
		console.log("Deleted");
	};

	const isAdmin = user.roles.some((role) => role.value === Roles.ADMIN);

	return (
		<Box className={classes.userTableControl}>
			<Formik
				initialValues={USER_TABLE_CONTROL_FORM_VALUE}
				validationSchema={UserTableControlFormValidation}
				onSubmit={(values) => {
					dispatch(changeUserPassword(user._id, values.password));
					values.password = "";
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
							disabled={isLoading}
						/>
						<Button
							type="submit"
							size="small"
							color="info"
							variant="contained"
							endIcon={<Edit />}
							disabled={isLoading}
						>
							Изменить
						</Button>
					</Form>
				)}
			</Formik>
			{!isAdmin && (
				<>
					<Button
						size="small"
						color="error"
						variant="contained"
						className={classes.userTableRemoveButton}
						endIcon={<PersonRemove />}
						disabled={isLoading}
						onClick={openDeleteDialogHandler}
					>
						Удалить
					</Button>
					<Dialog
						open={isDeleteOpened}
						onClose={closeDeleteDialogHandler}
						aria-labelledby="delete-user-alert-title"
						aria-describedby="delete-user-alert-description"
					>
						<DialogTitle id="delete-user-alert-title">
							Удаление пользователя
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="delete-user-alert-description">
								Пользователь {user.username} будет удалён.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
								variant="contained"
								size="small"
								color="error"
								onClick={DeleteUserHandler}
							>
								Удалить
							</Button>
							<Button
								variant="contained"
								size="small"
								color="info"
								onClick={closeDeleteDialogHandler}
								autoFocus
							>
								Отмена
							</Button>
						</DialogActions>
					</Dialog>
				</>
			)}
		</Box>
	);
};

export default UserTableControl;
