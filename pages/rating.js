import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import { FollowButton } from '../components/FollowButton/FollowButton';

import { MainLayout } from '../components/Layout/MainLayout';
// import { FollowButton } from '../components/FollowButton';

const Rating = () => {
  return (
    <MainLayout>
      <Paper className="flex flex-col gap-5 px-5 pt-5 mb-5" elevation={0}>
        <Typography className="text-3xl " variant="h5">
          Рейтинг сообществ и блогов
        </Typography>
        <Typography>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяцуа" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-4 ">1</span>Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};
export default Rating;
