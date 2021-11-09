import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computer: {
		marginTop: theme.spacing(2),
	},
	computerInfo: {
		marginTop: theme.spacing(2),
	},
	computerInfoSection: {
		padding: `${theme.spacing(3)} 0`,
	},
	computerSubheading: {
		display: "flex",
		alignItems: "center",
	},
	computerSubheadingIcon: {
		width: 24,
		height: 24,
		marginRight: theme.spacing(2),
	},
}));
