import React from 'react';
import RightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { CommentItem } from './CommentItem';
import styles from './SideComments.module.scss';
import clsx from 'clsx';
export const SideComments = () => {
  const [isVisible, setVisible] = React.useState(false);
  const changeVisible = () => {
    setVisible(!isVisible);
  };
  const items = [
    {
      user: {
        fullname: 'Вася Пупкин',
      },
      text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
      post: {
        title: 'Какая у вас дома ванна?',
      },
    },
    {
      user: {
        fullname: 'Вася Пупкин',
      },
      text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
      post: {
        title: 'Какая у вас дома ванна?',
      },
    },
    {
      user: {
        fullname: 'Вася Пупкин',
      },
      text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
      post: {
        title: 'Какая у вас дома ванна?',
      },
    },
  ];

  return (
    <div className={'sticky top-20 max-w-[250px] flex-col gap-5 hidden lg:flex'}>
      <div className={clsx(isVisible && styles.rotate)}>
        SideComments
        <IconButton onClick={changeVisible}>
          <RightIcon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((obj, i) => (
          <CommentItem key={i} user={obj.user.fullname} title={obj.post.title} text={obj.text} />
        ))}
      </div>
    </div>
  );
};

