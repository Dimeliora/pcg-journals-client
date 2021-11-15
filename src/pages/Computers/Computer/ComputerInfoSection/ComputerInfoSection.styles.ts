import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoSection: {
		marginBottom: theme.spacing(3),
		"&:last-of-type": {
			marginBottom: 0,
		},
	},
	computerInfoList: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	},
}));
