import { Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Car from '../../assets/img/wp5216658.jpg';
import { PostActions } from './PostActions';
export const Post = () => {
  return (
    <Paper elevation={0} className="max-w-[650px] p-3 flex flex-col gap-3">
      <Typography variant="h5">
        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
        «гигантском пушистом захватчике»
      </Typography>
      <Typography>
        Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
        апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <div className="w-full h-[350px] relative">
        <Image src={Car} alt="post" fill={true} />
      </div>
      <div>
        <PostActions />
      </div>
    </Paper>
  );
};


