import React, { FC } from 'react';
import useStyles from './styles';
import { MessageType } from '../../types/interfaces';

const ID: number = 1;

const Message: FC<{message: MessageType}> = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={
      ID !== message.isBot ? `${classes.chat} ${classes.mine}` : `${classes.chat} ${classes.theirs}`
    }
    >
      {message.message}
    </div>
  );
};

export default Message;
