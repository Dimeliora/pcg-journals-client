import { FC } from "react";
import { Typography, Divider } from "@mui/material";

import { useStyles } from "./ComputerInfoHead.style";

import { IComputerInfoHeadProps } from "./ComputerInfoHead.interfaces";

const ComputerInfoHead: FC<IComputerInfoHeadProps> = (props) => {
	const { title, icon: Icon } = props;

	const classes = useStyles();

	return (
		<>
			<Typography
				variant="h6"
				component="h4"
				className={classes.computerInfoHeadTitle}
			>
				<Icon className={classes.computerInfoHeadIcon} />
				{title}
			</Typography>
			<Divider />
		</>
	);
};

export default ComputerInfoHead;
