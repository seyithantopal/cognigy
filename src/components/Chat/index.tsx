import React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import useStyles from './styles';
import { MessageType } from '../../types/interfaces';

import Message from '../Message';
import TextBox from '../TextBox';

const chat = [
  {
    id: 1,
    sender: 1,
    receiver: 2,
    message: 'Hello',
  },
  {
    id: 2,
    sender: 2,
    receiver: 1,
    message: 'Hi',
  },
  {
    id: 3,
    sender: 1,
    receiver: 2,
    message: 'How are you! I just wanted to reach out to you since I haven\'t heard anything from you.',
  },
];
const Chat = () => {
  const classes = useStyles();
  return (
    <div className={classes.chatboxWrapper}>
      <h1>Chat component</h1>
      <div className={classes.historyWrapper}>
        {chat.map((e: MessageType) => <Message message={e} key={e.id} />)}
      </div>
      <div className={classes.textfieldWrapper}>
        <TextBox />
        <SendIcon />
      </div>
    </div>
  );
};

export default Chat;
