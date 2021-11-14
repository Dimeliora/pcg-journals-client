import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerFormHeading: {
		margin: `${theme.spacing(2)} 0`,
	},
	computerFormControls: {
		display: "flex",
		margin: `${theme.spacing(2)} 0 ${theme.spacing(3)}`,
	},
	computerFormControlsBack: {
		marginRight: "auto",
	},
	computerFormControlsSave: {
		marginRight: theme.spacing(2),
	},
}));
