import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	usersTableHeading: {
		marginBottom: theme.spacing(1),
	},
	tablePlaceholder: {
		transform: "scale(1, 0.9)",
	},
}));
