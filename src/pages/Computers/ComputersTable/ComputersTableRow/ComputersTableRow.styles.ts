import { Theme, colors } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableRow: {
		cursor: "pointer",
		"& > td": {
			border: "none",
		},
		"&:nth-child(2n)": {
			backgroundColor: colors.blue["50"],
		},
		"&:hover": {
			transform: "scale(1.015)",
		},
	},
	outdated: {
		color: colors.red["900"],
		fontWeight: 700,
	},
}));
