import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { useStyles } from "./ComputerInfoComments.styles";

import { IComputerInfoCommentsProps } from "./ComputerInfoComments.interfaces";

const ComputerInfoComments: FC<IComputerInfoCommentsProps> = ({ comments }) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerInfoComments}>
			{comments.map((comment, idx) => (
				<Box key={idx} className={classes.computerInfoCommentsItem}>
					<Typography
						variant="body2"
						className={classes.computerInfoCommentsHead}
					>
						{comment.commentDate} {comment.commentUsername}
					</Typography>
					<Typography variant="body1">{comment.commentText}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default ComputerInfoComments;
