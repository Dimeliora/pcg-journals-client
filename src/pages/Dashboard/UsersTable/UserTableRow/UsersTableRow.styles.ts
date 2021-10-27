import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableRow: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	tableRowCollapse: {
		"&:last-of-type > td": {
			borderBottom: "none",
		},
		"& > td": {
			paddingBottom: 0,
			paddingTop: 0,
		},
	},
}));
