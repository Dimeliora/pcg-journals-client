import { makeStyles } from "@mui/styles";
import { SIDEBAR_WIDTH } from "./Layout.constants";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		height: "100%",
		backgroundColor: "#f9f9f9",
	},
	sidebar: {
		width: SIDEBAR_WIDTH,
	},
	sidebarPaper: {
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
	content: {
		height: "100%",
	},
});
