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

import { useAppDispatch } from "../../../../store/hooks/store.hooks";
import { useStyles } from "./ComputerInfoControls.styles";

import { deleteComputerRequest } from "../../../../store/reducers/computers.reducer";

import { IComputerInfoControlsProps } from "./ComputerInfoControls.interfaces";

const ComputerInfoControls: FC<IComputerInfoControlsProps> = ({ computer }) => {
	const classes = useStyles();

	const history = useHistory();

	const dispatch = useAppDispatch();

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
		dispatch(deleteComputerRequest(computer._id));
		setIsDeleteOpened(false);
		history.push("/computers");
	};

	return (
		<Box className={classes.computerControls}>
			<Button
				type="button"
				size="small"
				variant="contained"
				className={classes.computerControlsBack}
				endIcon={<KeyboardReturn />}
				onClick={backToComputersListHandler}
			>
				К списку
			</Button>

			<Button
				type="button"
				size="small"
				variant="contained"
				endIcon={<Edit />}
				className={classes.computerControlsEdit}
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
		</Box>
	);
};

export default ComputerInfoControls;
