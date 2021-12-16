import React, { FC, useState, useEffect } from 'react';
import { SocketClient } from '@cognigy/socket-client';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { MessageType, OutputType } from '../../types/interfaces';
import { sendMessage } from '../../store/actions/messageActions';
import useStyles from './styles';
import Message from '../Message';
import TextBox from '../TextBox';

/* type Props = {
  state: {
    message:
  };
}; */

const Chat: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const [socketClient, setSocketClient] = useState<any>();
  const { messages } = useSelector((state) => state.message);

  const initializeSocketClient = async () => {
    try {
      const client = new SocketClient('https://endpoint-trial.cognigy.ai', 'c62c5fbea632152a4e3265f21862b91e21eacca1f135a1a07b031a0c6f5c6274', {
        forceWebsockets: true,
      });

      client.on('output', (output: OutputType) => {
        const msg = {
          id: (messages.length + 1),
          isBot: 1,
          message: output.text,
        };
        dispatch(sendMessage(msg));
      });
      await client.connect();
      setSocketClient(client);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  useEffect(() => {
    initializeSocketClient();
  }, []);

  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (message !== '') {
      socketClient.sendMessage(message);
      const msg = {
        id: (messages.length + 1),
        isBot: 0,
        message,
      };
      dispatch(sendMessage(msg));
      setMessage('');
    }
  };

  const handleChangeMessage = (msg: string) => {
    setMessage(msg);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.chatboxWrapper}>
        <div className={classes.historyWrapper}>
          {messages.map((e: MessageType) => <Message message={e} key={e.id} />)}
        </div>
        <div className={classes.textfieldWrapper}>
          <form onSubmit={handleSendMessage} className={classes.form}>
            <TextBox value={message} onChangeText={handleChangeMessage} />
            <SendIcon onClick={handleSendMessage} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
