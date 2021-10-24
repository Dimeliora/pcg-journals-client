import { FC } from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import { useStyles } from "./Layout.styles";

import logoImage from "../../assets/images/logo.gif";

const Layout: FC = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.sidebar}
				variant="permanent"
				classes={{ paper: classes.sidebarPaper }}
			>
				<Link to="/" className={classes.logoLink}>
					<img
						src={logoImage}
						alt="Логотип ДГК"
						className={classes.logoImage}
					/>
				</Link>
				<Sidebar />
			</Drawer>

			<div className={classes.content}>{children}</div>
		</div>
	);
};

export default Layout;
