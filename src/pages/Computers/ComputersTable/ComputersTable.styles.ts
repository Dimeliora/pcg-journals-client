import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computersTable: {
		marginTop: theme.spacing(2),
	},
	computersTablePlaceholder: {
		transform: "scale(1, 0.9)",
	},
	computersTableSearch: {
		width: "33%",
		marginBottom: theme.spacing(3),
	},
}));
