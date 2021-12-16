import { MessageType } from '../../types/interfaces';
import { SEND_MESSAGE } from './actionTypes';

export const sendMessage = (message: MessageType) => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};
