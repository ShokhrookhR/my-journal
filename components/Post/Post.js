import { Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Car from '../../assets/img/wp5216658.jpg';
const Post = () => {
  return (
    <Paper className="max-w-[600px] p-5 flex flex-col gap-3">
      <Typography variant="h4">Hello</Typography>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam facere earum aliquid
        officia architecto totam, quibusdam animi iure minima!
      </Typography>
      <div className="w-full h-[350px] relative">
        <Image src={Car} alt="post" fill />
      </div>
    </Paper>
  );
};

export default Post;
