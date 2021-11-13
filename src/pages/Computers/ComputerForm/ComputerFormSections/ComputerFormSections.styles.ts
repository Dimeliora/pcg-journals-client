import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerFormSection: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
		gap: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
	computerFormInput: {
		width: "100%",
	},
}));
