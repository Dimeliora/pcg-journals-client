import { FC } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";

import { useStyles } from "./Home.styles";

const Home: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Paper className={classes.home}>
        <Typography variant="h4" component="h2" className={classes.homeHeading}>
          Работа с внутрицеховыми журналами группы АСУТП
        </Typography>

        <Box className={classes.homeSection}>
          <Typography variant="h6" component="h3">
            Вкладка "Серверы и АРМ"
          </Typography>
          <Typography variant="body1">
            Журнал учёта серверов и компьютеров АРМ (перечень, аппаратная
            конфигурация, резервные копии ПО)
          </Typography>
        </Box>

        <Box className={classes.homeSection}>
          <Typography variant="h6" component="h3">
            Вкладка "Управление"
          </Typography>
          <Typography variant="body1">
            Управление учетными записями пользователей (доступно только для
            администратора)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
