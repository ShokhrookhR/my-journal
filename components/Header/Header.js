import { Avatar, Button, IconButton, Paper } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Link from 'next/link';
export const Header = () => {
  return (
    <div>
      <Paper className={'fixed z-[1] w-full bg-red-200 shadow-none'}>
        <div className="container">
          <div className="flex justify-between items-center gap-5 h-14 ">
            <div className="flex items-center gap-5">
              <IconButton className="rounded-xl">
                <MenuIcon className="!text-black" />
              </IconButton>
              <Link href={'/'}>
                <div className="text-lg font-semibold">SH-News</div>
              </Link>
              <div className="relative">
                <SearchIcon className="absolute top-[5px] left-2 opacity-70" />
                <input
                  type="text"
                  placeholder="Поиск"
                  className="transition-all 0.1s ease-in-out border-transparent hover:border-[#fff4e2] rounded-md outline-none pl-10 py-1 bg-[rgba(0,0,0,0.05)] focus:bg-white hover:bg-white"
                />
              </div>
              <IconButton className="bg-white rounded px-3">
                <CreateIcon className="text-black" />
              </IconButton>
            </div>
            <div className="flex items-center gap-1">
              <IconButton>
                <MessageIcon className="text-black" />
              </IconButton>

              <IconButton>
                <NotificationIcon className="text-black" />
              </IconButton>
              <div className="flex items-center gap-2">
                <Link href={'/profile/id'}>
                  <Avatar
                    className="rounded"
                    alt="avatar"
                    fill={true}
                    src="https://mui.com/static/images/avatar/1.jpg"
                  />
                </Link>
                <IconButton>
                  <DownIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

