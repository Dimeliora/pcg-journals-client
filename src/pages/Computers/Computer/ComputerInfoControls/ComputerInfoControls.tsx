import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	Box,
	Button,
	ButtonGroup,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import { KeyboardReturn, Edit, DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerInfoControls.styles";

import { IComputerInfoControlsProps } from "./ComputerInfoControls.interfaces";

const ComputerInfoControls: FC<IComputerInfoControlsProps> = ({ computer }) => {
	const classes = useStyles();

	const history = useHistory();

	const [isDeleteOpened, setIsDeleteOpened] = useState<boolean>(false);

	const backToComputersListHandler = (): void => {
		history.goBack();
	};

	const toComputerEditFormHandler = (): void => {
		history.push(`/computers/edit/${computer._id}`);
	};

	const openDeleteDialogHandler = (): void => {
		setIsDeleteOpened(true);
	};

	const closeDeleteDialogHandler = (): void => {
		setIsDeleteOpened(false);
	};

	const deleteComputerHandler = (): void => {
		setIsDeleteOpened(false);
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
					onClick={openDeleteDialogHandler}
				>
					Удалить
				</Button>

				<Dialog
					open={isDeleteOpened}
					onClose={closeDeleteDialogHandler}
					aria-labelledby="delete-computer-alert-title"
					aria-describedby="delete-computer-alert-description"
				>
					<DialogTitle id="delete-computer-alert-title">
						Удаление сервера/АРМ
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="delete-computer-alert-description">
							Сервер/АРМ {computer.pcName} будет удалён.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							variant="contained"
							size="small"
							color="error"
							onClick={deleteComputerHandler}
						>
							Удалить
						</Button>
						<Button
							variant="contained"
							size="small"
							color="info"
							onClick={closeDeleteDialogHandler}
							autoFocus
						>
							Отмена
						</Button>
					</DialogActions>
				</Dialog>
			</ButtonGroup>
		</Box>
	);
};

export default ComputerInfoControls;
