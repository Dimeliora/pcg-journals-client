import { FC } from "react";
import { Box } from "@mui/material";

import { useStyles } from "./ComputerInfoComments.styles";

import { IComputerInfoCommentsProps } from "./ComputerInfoComments.interfaces";

const ComputerInfoComments: FC<IComputerInfoCommentsProps> = ({ comments }) => {
	const classes = useStyles();

	return (
		<Box component="pre" className={classes.computerInfoComments}>
			{comments}
		</Box>
	);
};

export default ComputerInfoComments;
