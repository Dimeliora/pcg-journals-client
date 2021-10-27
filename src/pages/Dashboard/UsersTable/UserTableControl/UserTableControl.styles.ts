import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	userTableControl: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(2),
		paddingTop: theme.spacing(1),
	},
	userTableForm: {
		display: "flex",
		alignItems: "center",
	},
	userTablePasswordInput: {
		minWidth: 300,
		marginRight: theme.spacing(3),
	},
	userTableRemoveButton: {
		marginLeft: theme.spacing(5),
	},
}));
