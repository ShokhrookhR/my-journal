import React from 'react';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';

// import styles from './FollowButton.module.scss';

export const FollowButton = () => {
  const [followed, setFollowed] = React.useState(false);

  return (
    <IconButton onClick={() => setFollowed(!followed)} variant="contained">
      {!followed ? <AddIcon /> : <CheckIcon className="text-green-400" />}
    </IconButton>
  );
};
