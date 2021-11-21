import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { KeyboardReturn } from "@mui/icons-material";

import { useStyles } from "./NotFound.styles";

const NotFound: FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const backButtonClickHandler = (): void => {
    history.goBack();
  };

  return (
    <Box className={classes.notFound}>
      <Typography variant="h1" className={classes.notFoundHeading}>
        404
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        className={classes.notFoundSubheading}
      >
        Страница не найдена
      </Typography>
      <Typography variant="body1">
        Страница, на которую вы пытались перейти, не существует.
      </Typography>
      <Typography variant="body1">
        Вернитесь назад или воспользуйтесь меню навигации
      </Typography>
      <Button
        type="button"
        size="small"
        variant="contained"
        className={classes.notFoundBack}
        startIcon={<KeyboardReturn />}
        onClick={backButtonClickHandler}
      >
        Назад
      </Button>
    </Box>
  );
};

export default NotFound;
