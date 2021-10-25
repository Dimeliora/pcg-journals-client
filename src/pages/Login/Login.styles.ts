import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
	wrapper: {
		minWidth: 400,
		padding: theme.spacing(3),
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		marginTop: theme.spacing(2),
	},
	input: {
		width: "100%",
		marginBottom: theme.spacing(3),
	},
}));
