import { FC, MouseEvent, useState } from "react";
import {
	Box,
	IconButton,
	Menu,
	MenuList,
	MenuItem,
	ListItemIcon,
	Typography,
} from "@mui/material";
import { List, Password, PersonRemove } from "@mui/icons-material";

const UsersTableMenu: FC = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const isOpened = Boolean(anchorEl);

	const menuBtnClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(e.currentTarget);
	};

	const menuCloseHandler = (): void => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<IconButton
				id="user-control-button"
				aria-label="Управление пользователем"
				aria-controls="user-control-menu"
				aria-expanded={isOpened ? "true" : undefined}
				aria-haspopup="true"
				onClick={menuBtnClickHandler}
			>
				<List />
			</IconButton>
			<Menu
				id="user-control-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={isOpened}
				onClose={menuCloseHandler}
				MenuListProps={{
					"aria-labelledby": "user-control-button",
				}}
			>
				<MenuList>
					<MenuItem onClick={menuCloseHandler}>
						<ListItemIcon>
							<Password fontSize="small" />
						</ListItemIcon>
						<Typography variant="inherit">
							Изменить пароль
						</Typography>
					</MenuItem>
					<MenuItem onClick={menuCloseHandler}>
						<ListItemIcon>
							<PersonRemove fontSize="small" />
						</ListItemIcon>
						<Typography variant="inherit">
							Удалить пользователя
						</Typography>
					</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
};

export default UsersTableMenu;
