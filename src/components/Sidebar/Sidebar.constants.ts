import { Storage, AdminPanelSettings } from "@mui/icons-material";

import { Roles } from "../../interfaces/user.interfaces";

export const MENU_ITEMS = [
	{
		title: "Управление",
		icon: AdminPanelSettings,
		href: "/dashboard",
		allowedRole: Roles.ADMIN,
	},
	{
		title: "Серверы и АРМ",
		icon: Storage,
		href: "/computers",
		allowedRole: Roles.USER,
	},
];
