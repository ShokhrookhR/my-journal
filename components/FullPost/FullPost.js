import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { PostActions } from '../Post/PostActions';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import UserAddIcon from '@mui/icons-material/PersonAddOutlined';

import styles from './FullPost.module.scss';
import Image from 'next/image';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Superjet, летящий из Волгограда в Москву, подал сигнал бедствия. Возможно, в полете
          произошла разгерметизация
        </Typography>
        <div>
          <Typography>
            Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал бедствия. Об этом сообщает
            «Интерфакс» со ссылкой на информированный источник. По данным источника, самолет резко
            снизился над Тамбовской областью.
          </Typography>
          <Typography>
            По данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной
            этого собеседник агентства назвал разгерметизацию.
          </Typography>
          <Typography>Самолет продолжает полет на высоте примерно 3000 метров.</Typography>
          <Typography>
            Источник не уточнил названия авиакомпании и номера рейса. Судя по данным Flightradar24,
            сейчас в небе находится один SSJ100, летящий в Москву из Волгограда. Это — самолет
            «Аэрофлота», выполняющий рейс SU6416. На момент написания заметки он уже пересек
            Тамбовскую область и подлетает к Москве.
          </Typography>
          <div className="mb-7">
            <PostActions />
          </div>
          <div className="flex justify-between items-center">
            <div className={styles.userInfo}>
              <Image
                src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
                alt="Avatar"
                width={200}
                height={200}
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div className="flex gap-1">
              <Button variant="" className="">
                <MessageIcon />
              </Button>
              <Button variant="">
                <UserAddIcon />
                <b className="">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
