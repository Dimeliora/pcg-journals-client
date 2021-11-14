import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerControls: {
		display: "flex",
		marginTop: theme.spacing(2),
	},
	computerControlsBack: {
		marginRight: "auto",
	},
	computerControlsEdit: {
		marginRight: theme.spacing(2),
	},
}));
