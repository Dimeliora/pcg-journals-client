import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import ComputerInfoSection from "./ComputerInfoSection/ComputerInfoSection";
import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";
import { ReactComponent as BackupIcon } from "../../../assets/icons/backup.svg";
import { ReactComponent as ToolsIcon } from "../../../assets/icons/tools.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";

import { useStyles } from "./Computer.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

import { COMMON_INFO_TERMS, CPU_INFO_TERMS } from "./Computer.constants";

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
				<ComputerInfoSection
					title="Общая информация"
					icon={CommonInfoIcon}
					computer={currComputer}
					terms={COMMON_INFO_TERMS}
				/>
				<ComputerInfoSection
					title="Центральный процессор"
					icon={CPUIcon}
					computer={currComputer}
					terms={CPU_INFO_TERMS}
				/>

				{/* 
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
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<BackupIcon
							className={classes.computerSubheadingIcon}
						/>
						Резервные копии
					</Typography>
					<Divider />
				</Box>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<ToolsIcon className={classes.computerSubheadingIcon} />
						Возможности модернизации
					</Typography>
					<Divider />
				</Box>
				<Box className={classes.computerInfoSection}>
					<Typography
						variant="h6"
						component="h3"
						className={classes.computerSubheading}
					>
						<CommentIcon
							className={classes.computerSubheadingIcon}
						/>
						Комментарии
					</Typography>
					<Divider />
				</Box> */}
			</Box>
		</Box>
	);
};

export default Computer;
