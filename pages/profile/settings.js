import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';

const settings = () => {
  return (
    <MainLayout hideComments>
      <Paper elevation={0} className={'p-4'}>
        <Typography className="" variant="h6">
          Основные настройки
        </Typography>
        <Divider className="my-5" />
        <form className="flex flex-col gap-5">
          <TextField
            required
            id="outlined-required"
            label="Никнейм"
            size="small"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="E-mail"
            size="small"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Пароль"
            size="small"
            fullWidth
            variant="outlined"
          />
          <Divider />
          <Button
            color="primary"
            variant="outlined"
            className="self-start bg-blue-600 text-white hover:bg-white hover:text-blue-600">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
};
export default settings;
