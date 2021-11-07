import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	usersTableControl: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(2),
		paddingTop: theme.spacing(1),
	},
	usersTableForm: {
		display: "flex",
		alignItems: "center",
	},
	usersTablePasswordInput: {
		minWidth: 300,
		marginRight: theme.spacing(3),
	},
	usersTableRemoveButton: {
		marginLeft: theme.spacing(5),
	},
}));
