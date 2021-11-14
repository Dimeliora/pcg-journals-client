import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoHeadTitle: {
		display: "flex",
		alignItems: "center",
	},
	computerInfoHeadIcon: {
		width: 24,
		height: 24,
		marginRight: theme.spacing(2),
	},
}));
