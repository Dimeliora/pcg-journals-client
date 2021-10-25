import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./Login.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/store.hooks";
import { userLogin } from "../../store/reducers/user.reducer";

import { IFromLocation, ILoginFormValues } from "./Login.interfaces";

const Login: FC = () => {
	const history = useHistory();

	const location = useLocation<IFromLocation>();

	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isAuth, isLoading } = useAppSelector(({ user }) => user);

	useEffect(() => {
		const from = location.state?.from || { pathname: "/" };

		if (isAuth) {
			history.replace(from);
		}
	}, [isAuth, history, location]);

	const initialFormValues: ILoginFormValues = {
		username: "",
		password: "",
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.wrapper}>
				<Typography
					variant="h5"
					component="h2"
					align="center"
					color="textPrimary"
				>
					Вход
				</Typography>
				<Formik
					initialValues={initialFormValues}
					onSubmit={({ username, password }) => {
						dispatch(userLogin(username.trim(), password));
					}}
				>
					{({ values, handleChange, handleBlur }) => (
						<Form noValidate className={classes.form}>
							<Box className={classes.input}>
								<TextField
									variant="standard"
									size="small"
									label="Логин"
									name="username"
									value={values.username}
									autoComplete="false"
									disabled={isLoading}
									onChange={handleChange}
									onBlur={handleBlur}
									fullWidth
								/>
							</Box>
							<Box className={classes.input}>
								<TextField
									type="password"
									variant="standard"
									size="small"
									label="Пароль"
									name="password"
									value={values.password}
									autoComplete="false"
									disabled={isLoading}
									onChange={handleChange}
									onBlur={handleBlur}
									fullWidth
								/>
							</Box>
							<Button
								type="submit"
								variant="contained"
								endIcon={<Send />}
								disabled={isLoading}
							>
								Войти
							</Button>
						</Form>
					)}
				</Formik>
			</Paper>
		</div>
	);
};

export default Login;
