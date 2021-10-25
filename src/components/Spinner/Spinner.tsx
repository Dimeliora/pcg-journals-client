import { FC } from "react";
import { Box } from "@mui/material";

import { useStyles } from "./Spinner.styles";

const Spinner: FC = () => {
	const classes = useStyles();

	return (
		<Box className={classes.spinner}>
			<Box className={classes.spinnerOuter}>
				<Box className={classes.spinnerInner}>
					<Box>
						<Box />
						<Box />
						<Box />
						<Box />
						<Box />
						<Box />
						<Box />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Spinner;
