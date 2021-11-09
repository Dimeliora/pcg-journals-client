import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";

import { useStyles } from "./Computer.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

import { IdRouteParam } from "../../../interfaces/id.param.type";

const Computer: FC = () => {
	const classes = useStyles();

	const { id } = useParams<IdRouteParam>();

	const { computers } = useAppSelector(({ computers }) => computers);

	const currComputer = computers.find((computer) => computer._id === id);

	// TODO Skeleton while computers === [] & notification (redirect?) if pc not found by id...
	if (!currComputer) return null;

	return (
		<Box className={classes.computer}>
			<Typography variant="h5" component="h2">
				{currComputer.pcName} / {currComputer.pcPurpose}
			</Typography>
			<Box className={classes.computerInfo}>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<CommonInfoIcon className={classes.computerSubheadingIcon} />
						Общая информация
					</Typography>
					<Divider />
				</Box>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<CPUIcon className={classes.computerSubheadingIcon} />
						Центральный процессор
					</Typography>
					<Divider />
				</Box>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<RAMIcon className={classes.computerSubheadingIcon} />
						Оперативная память
					</Typography>
					<Divider />
				</Box>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<HDDIcon className={classes.computerSubheadingIcon} />
						Жёсткие диски
					</Typography>
					<Divider />
				</Box>
			</Box>
		</Box>
	);
};

export default Computer;
