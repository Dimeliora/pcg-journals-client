import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  notFound: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  notFoundHeading: {
    color: theme.palette.primary.dark,
    fontSize: 200,
    fontWeight: 700,
  },
  notFoundSubheading: {
    marginBottom: theme.spacing(2),
  },
  notFoundBack: {
    marginTop: theme.spacing(2),
  },
}));
