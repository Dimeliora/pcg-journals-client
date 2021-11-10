import { FC } from "react";
import {
	Box,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

import { useStyles } from "./ComputerInfoSection.styles";

import { IComputerInfoSectionProps } from "./ComputerInfoSection.interfaces";
import { IComputer } from "../../../../interfaces/computer.interface";

const ComputerInfoSection: FC<IComputerInfoSectionProps> = (props) => {
	const { title, icon: Icon, computer, terms, children } = props;

	const classes = useStyles();

	return (
		<Box className={classes.computerInfoSection}>
			<Typography
				variant="h6"
				component="h3"
				className={classes.computerInfoSubheading}
			>
				<Icon className={classes.computerInfoIcon} />
				{title}
			</Typography>
			<Divider />
			<List className={classes.computerInfoList}>
				{Object.entries(terms).map(([term, descripion]) => (
					<ListItem key={term}>
						<ListItemText
							primary={descripion}
							secondary={computer[term as keyof IComputer] || "н/д"}
						/>
					</ListItem>
				))}
			</List>
			{children}
		</Box>
	);
};

export default ComputerInfoSection;
