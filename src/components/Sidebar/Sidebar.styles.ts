import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	activeLink: {
		backgroundColor: theme.palette.grey["100"],
	},
}));
