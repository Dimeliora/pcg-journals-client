import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoComments: {
		margin: 0,
		padding: `0 ${theme.spacing(2)}`,
		fontFamily: theme.typography.body2.fontFamily,
	},
}));
