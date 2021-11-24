import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  home: {
    padding: theme.spacing(2),
  },
  homeHeading: {
    textAlign: "center",
  },
  homeSection: {
    marginTop: theme.spacing(3),
  },
}));
