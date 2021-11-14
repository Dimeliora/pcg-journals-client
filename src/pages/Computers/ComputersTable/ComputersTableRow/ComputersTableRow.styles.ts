import { Theme, colors } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableRow: {
		cursor: "pointer",
		"&:last-child > td": {
			border: "none",
		},
		"&:hover": {
			backgroundColor: colors.blue["50"],
		},
	},
	pcTypeIcon: {
		width: 25,
		height: 25,
	},
	outdated: {
		color: colors.red["900"],
		fontWeight: 700,
	},
}));
