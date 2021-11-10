import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerInfoNested: {
		display: "flex",
		alignItems: "center",
		padding: `0 ${theme.spacing(2)}`,
	},
	computerInfoNestedSubheading: {
		marginRight: theme.spacing(3),
		fontSize: theme.typography.body1.fontSize,
	},
	computerInfoNestedList: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
		flexGrow: 1,
	},
}));
