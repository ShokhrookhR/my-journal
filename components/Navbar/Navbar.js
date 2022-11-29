import Link from 'next/link';
import React from 'react';
// import { WhatshotIcon } from '@mui/icons-material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListIcon from '@mui/icons-material/FormatListBulleted';

import { Button } from '@mui/material';

export const Navbar = () => {
  const menu = [
    { text: 'Лента', icon: <WhatshotIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/' },
    { text: 'Рейтинг SN', icon: <TrendingUpIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/' },
  ];
  return (
    <div className="sticky w-[200px] top-20">
      <ul className="flex flex-col gap-1">
        {menu.map((item) => (
          <li className="" key={item.text}>
            <Link href={item.path}>
              <Button className="text-inherit w-full flex justify-start gap-3 ">
                {item.icon}
                {item.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
