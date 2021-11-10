import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computers: {
		padding: `${theme.spacing(3)} 0`,
	},
	computersSection: {
		padding: theme.spacing(2),
	},
}));
