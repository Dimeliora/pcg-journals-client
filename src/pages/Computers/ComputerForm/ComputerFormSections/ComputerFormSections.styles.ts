import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	computerFormSection: {
		padding: `${theme.spacing(3)} 0 ${theme.spacing(5)}`,
	},
	computerFormSectionStatic: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
		gap: `${theme.spacing(2)} ${theme.spacing(3)}`,
		marginBottom: theme.spacing(3),
	},
	computerFormInput: {
		width: "100%",
	},
	computerFormSectionDynamic: {},
	computerFormSectionDynamicItem: {
		display: "grid",
		gridTemplateColumns: "100px repeat(auto-fill, minmax(200px, 1fr))",
		columnGap: theme.spacing(3),
		alignItems: "center",
		marginTop: theme.spacing(2),
		"& > :last-child": {
			justifySelf: "start",
		},
	},
	computerFormSectionDynamicHeading: {
		marginRight: theme.spacing(2),
		fontSize: theme.typography.body1.fontSize,
	},
	computerFormSectionDynamicDelete: {
		marginLeft: theme.spacing(2),
	},
}));
