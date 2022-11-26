import React from 'react';
import RightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import SideComponentItem from './CommentItem';
import styles from './SideComments.module.scss';
import clsx from 'clsx';
const SideComments = () => {
  const [isVisible, setVisible] = React.useState(false);
  const changeVisible = () => {
    setVisible(!isVisible);
  };
  return (
    <div className={' max-w-[250px] flex-col gap-5 hidden lg:flex'}>
      <div className={clsx(isVisible && styles.rotate)}>
        SideComments
        <IconButton onClick={changeVisible}>
          <RightIcon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-3">
        <SideComponentItem />
        <SideComponentItem />
        <SideComponentItem />
        <SideComponentItem />
      </div>
    </div>
  );
};

export default SideComments;
