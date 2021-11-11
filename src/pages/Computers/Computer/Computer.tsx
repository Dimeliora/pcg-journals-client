import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import ComputerInfoSection from "./ComputerInfoSection/ComputerInfoSection";
import ComputerInfoNested from "./ComputerInfoNested/ComputerInfoNested";
import ComputerInfoComments from "./ComputerInfoComments/ComputerInfoComments";
import ComputerInfoControls from "./ComputerInfoControls/ComputerInfoControls";
import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";
import { ReactComponent as BackupIcon } from "../../../assets/icons/backup.svg";
import { ReactComponent as ToolsIcon } from "../../../assets/icons/tools.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";

import { useStyles } from "./Computer.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

import {
	COMMON_INFO_TERMS,
	CPU_INFO_TERMS,
	RAM_INFO_TERMS,
	RAM_MODULES,
	RAM_MODULE_INFO_TERMS,
	HDD_INFO_TERMS,
	DISKS,
	HDD_DISK_INFO_TERMS,
	BACKUPS,
	BACKUP_INFO_TERMS,
	UPGRADE_INFO_TERMS,
	COMMENTS,
} from "./Computer.constants";

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

			<ComputerInfoControls computer={currComputer} />

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

				<ComputerInfoSection
					title="Оперативная память"
					icon={RAMIcon}
					computer={currComputer}
					terms={RAM_INFO_TERMS}
				>
					<ComputerInfoNested
						title="Модуль"
						items={currComputer[RAM_MODULES]}
						terms={RAM_MODULE_INFO_TERMS}
					/>
				</ComputerInfoSection>

				<ComputerInfoSection
					title="Жёсткие диски"
					icon={HDDIcon}
					computer={currComputer}
					terms={HDD_INFO_TERMS}
				>
					<ComputerInfoNested
						title="Диск"
						items={currComputer[DISKS]}
						terms={HDD_DISK_INFO_TERMS}
					/>
				</ComputerInfoSection>

				<ComputerInfoSection title="Резервные копии" icon={BackupIcon}>
					<ComputerInfoNested
						title="Копия"
						items={currComputer[BACKUPS]}
						terms={BACKUP_INFO_TERMS}
					/>
				</ComputerInfoSection>

				<ComputerInfoSection
					title="Возможности модернизации"
					icon={ToolsIcon}
					computer={currComputer}
					terms={UPGRADE_INFO_TERMS}
				/>

				<ComputerInfoSection title="Комментарии" icon={CommentIcon}>
					<ComputerInfoComments comments={currComputer[COMMENTS]} />
				</ComputerInfoSection>
			</Box>
		</Box>
	);
};

export default Computer;
