import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerFormSection: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
		gap: `${theme.spacing(2)} ${theme.spacing(3)}`,
		marginTop: theme.spacing(2),
	},
	computerFormInput: {
		width: "100%",
	},
	computerFormDynamic: {
		marginTop: theme.spacing(3),
	},
	computerFormDynamicItem: {
		display: "grid",
		gridTemplateColumns: "100px repeat(auto-fill, minmax(200px, 1fr))",
		columnGap: theme.spacing(3),
		alignItems: "center",
		marginTop: theme.spacing(2),
		"& > :last-child": {
			justifySelf: "start",
		},
	},
	computerFormDynamicHeading: {
		marginRight: theme.spacing(2),
		fontSize: theme.typography.body1.fontSize,
	},
	computerFormDynamicDelete: {
		marginLeft: theme.spacing(2),
	},
}));
