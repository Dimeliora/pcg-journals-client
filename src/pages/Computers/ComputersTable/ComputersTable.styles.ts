import { Theme, colors } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computersTable: {
		marginTop: theme.spacing(2),
	},
	computersTableHead: {
		backgroundColor: colors.blue["100"],
	},
	computersTablePanel: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	computersTablePlaceholder: {
		transform: "scale(1, 0.9)",
	},
	computersTableSearch: {
		width: "33%",
		minWidth: 315,
		marginBottom: theme.spacing(3),
	},
}));
