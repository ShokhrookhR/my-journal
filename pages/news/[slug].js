import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { FullPost } from '../../components/FullPost/FullPost';
import { Comment } from '../../components/Comment/Comment';
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material';

export default function Home() {
  return (
    <MainLayout className="mb-12" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="flex flex-col gap-5 mt-5 p-7">
        <Typography variant="h6" className="">
          42 комментария
        </Typography>
        <Tabs className="" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-5" />
        <Comment />
        <Comment />
        <Comment />
      </Paper>
    </MainLayout>
  );
}
