import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import cn from "classnames";

import { useStyles } from "./SidebarMenu.styles";

import { MENU_ITEMS } from "./SidebarMenu.constants";

const SidebarMenu: FC = () => {
	const history = useHistory();

	const location = useLocation();

	const classes = useStyles();

	return (
		<List>
			{MENU_ITEMS.map(({ title, href, icon: Icon }) => (
				<ListItemButton
					key={title}
					onClick={() => history.push(href)}
					className={cn({
						[classes.activeLink]: href === location.pathname,
					})}
				>
					<ListItemIcon>
						<Icon color="primary" />
					</ListItemIcon>
					<ListItemText>{title}</ListItemText>
				</ListItemButton>
			))}
		</List>
	);
};

export default SidebarMenu;
