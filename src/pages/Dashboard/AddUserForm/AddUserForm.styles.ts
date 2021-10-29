import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	addUser: {
		padding: `${theme.spacing(4)} 0`,
	},
	addUserHeading: {
		marginBottom: theme.spacing(1),
	},
	addUserForm: {
		display: "flex",
		alignItems: "center",
	},
	addUserFormField: {
		marginRight: theme.spacing(3),
	},
}));
