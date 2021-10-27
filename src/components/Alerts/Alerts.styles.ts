import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	alerts: {
		position: "fixed",
		top: 70,
		right: 30,
	},
	alertsItem: {
		marginBottom: theme.spacing(2),
		"&:last-child": {
			marginBottom: 0,
		},
	},
}));
