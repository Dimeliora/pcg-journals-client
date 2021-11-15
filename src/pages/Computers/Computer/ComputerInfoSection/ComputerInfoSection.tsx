import { FC } from "react";
import {
	Box,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

import { useStyles } from "./ComputerInfoSection.styles";

import { IComputerInfoSectionProps } from "./ComputerInfoSection.interfaces";
import { IComputer } from "../../../../interfaces/computer.interface";

const ComputerInfoSection: FC<IComputerInfoSectionProps> = (props) => {
	const { computer, terms, children } = props;

	const classes = useStyles();

	return (
		<Box className={classes.computerInfoSection}>
			{computer && terms && (
				<List className={classes.computerInfoList}>
					{Object.entries(terms).map(([term, descripion]) => (
						<ListItem key={term}>
							<ListItemText
								primary={descripion}
								secondary={computer[term as keyof IComputer]}
							/>
						</ListItem>
					))}
				</List>
			)}
			{children}
		</Box>
	);
};

export default ComputerInfoSection;
