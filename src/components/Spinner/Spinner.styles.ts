import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	spinner: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	spinnerOuter: {
		width: 201,
		height: 201,
		display: "inline-block",
		overflow: "hidden",
		background: theme.palette.grey["100"],
	},
	spinnerInner: {
		width: "100%",
		height: "100%",
		position: "relative",
		transform: "translateZ(0) scale(1)",
		backfaceVisibility: "hidden",
		transformOrigin: "0 0",
		"& div": {
			boxSizing: "content-box",
		},
		"& > div": {
			transformOrigin: "100.49999999999999px 100.49999999999999px",
			animation: "$spinner 0.2247191011235955s infinite linear",
		},
		"& > div div": {
			position: "absolute",
			width: 22.11,
			height: 152.76,
			background: theme.palette.primary.light,
			left: 100.49999999999999,
			top: 100.49999999999999,
			transform: "translate(-50%, -50%)",
		},
		"& > div div:nth-child(1)": {
			width: 120.6,
			height: 120.6,
			borderRadius: "50%",
		},
		"& > div div:nth-child(7)": {
			width: 80.39999999999999,
			height: 80.39999999999999,
			background: theme.palette.grey["100"],
			borderRadius: "50%",
		},
		"& > div div:nth-child(3)": {
			transform: "translate(-50%, -50%) rotate(36deg)",
		},
		"& > div div:nth-child(4)": {
			transform: "translate(-50%, -50%) rotate(72deg)",
		},
		"& > div div:nth-child(5)": {
			transform: "translate(-50%, -50%) rotate(108deg)",
		},
		"& > div div:nth-child(6)": {
			transform: "translate(-50%, -50%) rotate(144deg)",
		},
	},
	"@keyframes spinner": {
		"0%": {
			transform: "rotate(0deg)",
		},
		"50%": {
			transform: "rotate(18deg)",
		},
		"100%": {
			transform: "rotate(36deg)",
		},
	},
}));
