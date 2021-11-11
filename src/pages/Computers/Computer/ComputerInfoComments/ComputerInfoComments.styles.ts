import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoComments: {
		marginTop: theme.spacing(2),
		padding: `0 ${theme.spacing(2)}`,
	},
	computerInfoCommentsItem: {
		marginBottom: theme.spacing(3),
		"&:last-child": {
			marginBottom: 0,
		},
	},
	computerInfoCommentsHead: {
		fontWeight: 700,
		fontStyle: "italic",
	},
}));
