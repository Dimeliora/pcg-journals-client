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
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
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
