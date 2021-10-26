import { FC } from "react";
import {
	Box,
	Drawer,
	AppBar,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import { useStyles } from "./Layout.styles";
import { useAppSelector, useAppDispatch } from "../../store/hooks/store.hooks";

import { userLogout } from "../../store/reducers/user.reducer";

import logoImage from "../../assets/images/logo.png";

const Layout: FC = ({ children }) => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isAuth, user } = useAppSelector(({ user }) => user);

	const logoutButtonHandler = (): void => {
		dispatch(userLogout());
	};

	return (
		<Box className={classes.layoutRoot}>
			{isAuth && user && (
				<AppBar color="inherit" elevation={1} className={classes.header}>
					<Toolbar>
						<Typography
							variant="h5"
							component="h2"
							className={classes.username}
						>
							{user.username}
						</Typography>
						<Button
							variant="contained"
							size="small"
							className={classes.logoutButton}
							onClick={logoutButtonHandler}
						>
							Выйти
						</Button>
					</Toolbar>
				</AppBar>
			)}
			{isAuth && (
				<Drawer
					className={classes.sidebar}
					variant="permanent"
					classes={{ paper: classes.sidebarWrapper }}
				>
					<Link to="/" className={classes.logoLink}>
						<img
							src={logoImage}
							alt="Логотип АО ДГК"
							className={classes.logoImage}
						/>
					</Link>
					<Sidebar />
				</Drawer>
			)}
			<Box className={classes.layoutContent}>
				{isAuth && <Box className={classes.layoutContentPaddingTopBox} />}
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
