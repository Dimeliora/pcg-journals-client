import { FC, FormEvent } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Edit, PersonRemove } from "@mui/icons-material";

import { useStyles } from "./UserTableControl.styles";

import { IUserTableControlProps } from "./UserTableControl.interfaces";

const UserTableControl: FC<IUserTableControlProps> = ({ isAdmin }) => {
	const classes = useStyles();

	const changePasswordSubmitHandler = (e: FormEvent): void => {
		e.preventDefault();
	};

	const deleteUserClickHandler = (): void => {};

	return (
		<Box className={classes.userTableControl}>
			<Box
				component="form"
				className={classes.userTableForm}
				onSubmit={changePasswordSubmitHandler}
			>
				<TextField
					type="password"
					size="small"
					variant="standard"
					label="Изменить пароль"
					className={classes.userTablePasswordInput}
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
			</Box>
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
