import React from 'react';
import { IconButton } from '@mui/material';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@mui/icons-material';

// const styles = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   position: 'relative',
//   top: '5',
//   listStyle: 'none',
//   padding: '0',
//   margin: '0',
// };

export const PostActions = () => {
  return (
    <ul className="flex justify-between items-center">
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
