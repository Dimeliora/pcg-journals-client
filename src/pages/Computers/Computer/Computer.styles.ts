import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computer: {
		marginTop: theme.spacing(2),
	},
	computerPlaceholder: {
		transform: "scale(1, 0.9)",
	},
	computerInfo: {
		marginTop: theme.spacing(3),
	},
	computerComments: {},
}));
