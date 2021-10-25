import { Storage, AdminPanelSettings } from "@mui/icons-material";

export const MENU_ITEMS = [
	{
		title: "Управление",
		icon: AdminPanelSettings,
		href: "/dashboard",
	},
	{
		title: "Серверы и АРМ",
		icon: Storage,
		href: "/computers",
	},
];
