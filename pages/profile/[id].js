import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab, IconButton } from '@mui/material';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@mui/icons-material';

import { Post } from '../../components/Post/Post';
import { MainLayout } from '../../components/Layout/MainLayout';

const Profile = () => {
  return (
    <MainLayout contentFullWidth hideComments>
      <div className="grid gap-7">
        <Paper className="pl-20 pr-20 pt-20 w-full" elevation={0}>
          <div className="flex justify-between">
            <div>
              <Avatar
                style={{ width: 120, height: 120, borderRadius: 6 }}
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
                Amon Bower
              </Typography>
            </div>
            <div className="flex items-start gap-3">
              <Link href="/profile/settings">
                <IconButton variant="outlined">
                  <SettingsIcon className="text-black" />
                </IconButton>
              </Link>
              <Button
                className=" flex gap-1 bg-blue-600 text-white  hover:bg-white hover:text-blue-600"
                variant="outlined"
                color="primary">
                <MessageIcon />
                Написать
              </Button>
            </div>
          </div>
          <div className="flex mb-10 mt-10">
            <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
              +208
            </Typography>
            <Typography>2 подписчика</Typography>
          </div>
          <Typography>На проекте с 15 сен 2016</Typography>

          <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Статьи" />
            <Tab label="Комментарии" />
            <Tab label="Закладки" />
          </Tabs>
        </Paper>
        <div className="flex justify-between items-start gap-5">
          <div className="">
            <Post />
          </div>
          <Paper style={{ width: 300 }} className="p-5" elevation={0}>
            <b>Подписчики</b>
            <div className="flex gap-3 flex-auto mt-3">
              <Avatar
                className=""
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
              <Avatar
                className=""
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
            </div>
          </Paper>
        </div>
      </div>
    </MainLayout>
  );
};
export default Profile;
