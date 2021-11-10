import { PropsWithChildren } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

import { useStyles } from "./ComputerInfoNested.styles";

import { IComputerInfoNestedProps } from "./ComputerInfoNested.interfaces";

const ComputerInfoNestedList = <T extends object>(
	props: PropsWithChildren<IComputerInfoNestedProps<T>>
) => {
	const { title, items, terms } = props;

	const classes = useStyles();

	const hasItems = items.length > 0;

	return (
		<>
			{hasItems &&
				items.map((item, idx) => (
					<Box key={idx} className={classes.computerInfoNested}>
						<Typography
							variant="h6"
							component="h4"
							className={classes.computerInfoNestedSubheading}
						>
							{title} #{idx + 1}
						</Typography>
						<List className={classes.computerInfoNestedList}>
							{Object.entries(terms).map(([term, description]) => (
								<ListItem key={term}>
									<ListItemText
										primary={description}
										secondary={item[term as keyof T]}
									/>
								</ListItem>
							))}
						</List>
					</Box>
				))}
		</>
	);
};

export default ComputerInfoNestedList;
