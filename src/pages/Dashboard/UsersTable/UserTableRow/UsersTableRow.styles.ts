import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
});
