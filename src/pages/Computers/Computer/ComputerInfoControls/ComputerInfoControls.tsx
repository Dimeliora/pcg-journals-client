import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";
import { KeyboardReturn, Edit, DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerInfoControls.styles";

import { IdRouteParam } from "../../../../interfaces/id.param.type";

const ComputerInfoControls: FC = () => {
	const classes = useStyles();

	const history = useHistory();

	const { id } = useParams<IdRouteParam>();

	const backToComputersListHandler = (): void => {
		history.goBack();
	};

	const toComputerEditFormHandler = (): void => {
		history.push(`/computers/edit/${id}`);
	};

	return (
		<Box className={classes.computerControls}>
			<Button
				type="button"
				size="small"
				variant="contained"
				endIcon={<KeyboardReturn />}
				onClick={backToComputersListHandler}
			>
				К списку
			</Button>
			<ButtonGroup className={classes.computerControlsRight}>
				<Button
					type="button"
					size="small"
					variant="contained"
					endIcon={<Edit />}
					onClick={toComputerEditFormHandler}
				>
					Редактировать
				</Button>
				<Button
					type="button"
					size="small"
					color="error"
					variant="contained"
					endIcon={<DeleteForever />}
				>
					Удалить
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default ComputerInfoControls;
