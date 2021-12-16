import React, { FC, useState } from 'react';
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
    sender: 2,
    receiver: 1,
    message: 'Good to hear from you',
  },
  {
    id: 4,
    sender: 1,
    receiver: 2,
    message: 'How are you! I just wanted to reach out to you since I haven\'t heard anything from you.',
  },
  {
    id: 5,
    sender: 1,
    receiver: 2,
    message: 'Hello, you there??',
  },

];
const Chat: FC = () => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Message sent', message);
  };

  const handleChangeMessage = (msg: string) => {
    setMessage(msg);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.chatboxWrapper}>
        <div className={classes.historyWrapper}>
          {chat.map((e: MessageType) => <Message message={e} key={e.id} />)}
        </div>
        <div className={classes.textfieldWrapper}>
          <form onSubmit={handleSendMessage} className={classes.form}>
            <TextBox onChangeText={handleChangeMessage} />
            <SendIcon onClick={handleSendMessage} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
