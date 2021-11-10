import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	dashboard: {
		padding: `${theme.spacing(3)} 0`,
	},
	dashboardUsers: {
		padding: theme.spacing(2),
	},
}));
