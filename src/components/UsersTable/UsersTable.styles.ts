import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableRow: {
		"&:last-child th, &:last-child td": {
			border: "none",
		},
	},
}));
