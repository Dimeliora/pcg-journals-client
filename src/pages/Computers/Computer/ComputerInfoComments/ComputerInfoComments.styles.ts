import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoComments: {
		padding: `0 ${theme.spacing(2)}`,
	},
	computerInfoCommentsItem: {
		marginTop: theme.spacing(2),
	},
	computerInfoCommentsHead: {
		fontWeight: 700,
		fontStyle: "italic",
	},
}));
