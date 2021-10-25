import { FC } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./Login.styles";

const Login: FC = () => {
	const classes = useStyles();

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
				<Box noValidate component="form" className={classes.form}>
					<Box className={classes.input}>
						<TextField
							variant="standard"
							size="small"
							label="Логин"
							name="username"
							autoComplete="false"
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
							autoComplete="false"
							fullWidth
						/>
					</Box>
					<Button variant="contained" endIcon={<Send />}>
						Войти
					</Button>
				</Box>
			</Paper>
		</div>
	);
};

export default Login;
