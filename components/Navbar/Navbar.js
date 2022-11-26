import Link from 'next/link';
import React from 'react';
// import { WhatshotIcon } from '@mui/icons-material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className={'w-[200px] px-5 hidden md:block'}>
      <ul className="fixed">
        <li className="">
          <Link href={''}>
            <Button className="text-inherit w-full flex justify-start gap-3 hover:bg-white">
              <WhatshotIcon />
              Лента
            </Button>
          </Link>
        </li>
        <li className="">
          <Link href={''}>
            <Button className="text-inherit w-full flex justify-start gap-3 hover:bg-white">
              <MessageIcon />
              Сообщения
            </Button>
          </Link>
        </li>
        <li className="">
          <Link href={''}>
            <Button className="text-inherit w-full flex justify-start gap-3 hover:bg-white">
              <TrendingUpIcon />
              Рейтинг
            </Button>
          </Link>
        </li>
        <li className="">
          <Link href={''}>
            <Button className="text-inherit w-full flex justify-start gap-3 hover:bg-white">
              <FormatListBulletedIcon />
              Подписки
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
