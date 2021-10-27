import { FC } from "react";
import { Box, Alert } from "@mui/material";

import { useStyles } from "./Alerts.styles";
import { useAppSelector } from "../../store/hooks/store.hooks";

const Alerts: FC = () => {
	const classes = useStyles();

	const { alerts } = useAppSelector(({ ui }) => ui);

	return (
		<Box className={classes.alerts}>
			{alerts.map((alert) => (
				<Alert
					key={alert.id}
					severity="error"
					classes={{ root: classes.alertsItem }}
				>
					{alert.message}
				</Alert>
			))}
		</Box>
	);
};

export default Alerts;
