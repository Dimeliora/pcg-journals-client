import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	loginRoot: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
	loginWrapper: {
		minWidth: 400,
		padding: theme.spacing(3),
	},
	loginForm: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		marginTop: theme.spacing(2),
	},
	loginFormField: {
		width: "100%",
		marginBottom: theme.spacing(3),
	},
}));
