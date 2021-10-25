import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import { useStyles } from "./Sidebar.styles";
import { useAppSelector } from "../../store/hooks/store.hooks";

import { MENU_ITEMS } from "./Sidebar.constants";

const Sidebar: FC = () => {
	const classes = useStyles();

	const { user } = useAppSelector(({ user }) => user);

	return (
		<List>
			{MENU_ITEMS.map(({ title, href, allowedRole, icon: Icon }) => {
				if (user && user.roles.every((role) => role.value !== allowedRole)) {
					return null;
				}

				return (
					<ListItemButton
						key={title}
						component={NavLink}
						to={href}
						activeClassName={classes.activeLink}
						exact
					>
						<ListItemIcon>
							<Icon color="primary" />
						</ListItemIcon>
						<ListItemText>{title}</ListItemText>
					</ListItemButton>
				);
			})}
		</List>
	);
};

export default Sidebar;
