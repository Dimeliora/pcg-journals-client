import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SIDEBAR_WIDTH } from "./Layout.constants";

export const useStyles = makeStyles((theme: Theme) => ({
	layoutRoot: {
		display: "flex",
		height: "100%",
	},
	header: {
		width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
	},
	username: {
		color: theme.palette.text.secondary,
	},
	logoutButton: {
		marginLeft: "auto",
	},
	sidebar: {
		width: SIDEBAR_WIDTH,
	},
	sidebarWrapper: {
		width: SIDEBAR_WIDTH,
	},
	logoLink: {
		display: "block",

		padding: 10,
	},
	logoImage: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	layoutContentPaddingTopBox: theme.mixins.toolbar,
	layoutContent: {
		flexGrow: 1,
		width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
		height: "100%",
		paddingTop: theme.spacing(3),
	},
}));
