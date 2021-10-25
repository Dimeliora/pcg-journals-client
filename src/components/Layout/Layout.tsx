import { FC } from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import { useStyles } from "./Layout.styles";
import { useAppSelector } from "../../store/hooks/store.hooks";

import logoImage from "../../assets/images/logo.png";

const Layout: FC = ({ children }) => {
	const classes = useStyles();

	const { isAuth } = useAppSelector(({ user }) => user);

	return (
		<div className={classes.layoutRoot}>
			{isAuth && (
				<Drawer
					className={classes.sidebar}
					variant="permanent"
					classes={{ paper: classes.sidebarPaper }}
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

			<div className={classes.layoutContent}>{children}</div>
		</div>
	);
};

export default Layout;
