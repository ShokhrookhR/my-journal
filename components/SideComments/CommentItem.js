import { Avatar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const CommentItem = ({ user, title, text }) => {
  return (
    <div>
      <div className="max-h-[200px] flex flex-col gap-3 overflow-hidden text-clip">
        <div className="flex gap-3">
          <Link href={''}>
            <Avatar className="rounded" />
          </Link>
          <Typography variant="h6">{user}</Typography>
        </div>
        <div className="flex flex-col gap-2">
          <p className="h-[100px] overflow-hidden">{text}</p>
          <Link href={''}>
            <p className="truncate font-medium">{title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

