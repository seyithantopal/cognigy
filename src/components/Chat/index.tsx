import React, {
  FC,
  useState,
  useEffect,
  useRef,
} from 'react';
import { SocketClient } from '@cognigy/socket-client';
import { useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { v4 as uuidv4 } from 'uuid';
import { MessageType, OutputType } from '../../types/interfaces';
import { sendMessage } from '../../store/actions/messageActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import useStyles from './styles';
import Message from '../Message';
import TextBox from '../TextBox';

const Chat: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const chatBottomRef = useRef(null);
  const [message, setMessage] = useState<string>('');
  const [socketClient, setSocketClient] = useState<any>();
  const { messages } = useTypedSelector((state) => state.message);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initializeSocketClient = async () => {
    try {
      const client = new SocketClient('https://endpoint-trial.cognigy.ai', 'c62c5fbea632152a4e3265f21862b91e21eacca1f135a1a07b031a0c6f5c6274', {
        forceWebsockets: true,
      });

      client.on('output', (output: OutputType) => {
        const msg = {
          id: uuidv4(),
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
        id: uuidv4(),
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
          <div ref={chatBottomRef} />
        </div>
        <div className={classes.textfieldWrapper}>
          <form onSubmit={handleSendMessage} className={classes.form}>
            <TextBox value={message} onChangeText={handleChangeMessage} />
            <IconButton onClick={handleSendMessage}>
              <SendIcon color="secondary" />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
