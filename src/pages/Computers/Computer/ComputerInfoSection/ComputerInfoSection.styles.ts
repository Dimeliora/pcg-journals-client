import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoSection: {
		padding: `${theme.spacing(3)} 0`,
	},
	computerInfoSubheading: {
		display: "flex",
		alignItems: "center",
	},
	computerInfoIcon: {
		width: 24,
		height: 24,
		marginRight: theme.spacing(2),
	},
	computerInfoList: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	},
}));
