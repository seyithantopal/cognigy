import { MessageType, IAction } from '../../types/interfaces';
import { SEND_MESSAGE } from '../actions/actionTypes';

type State = {
  messages: MessageType[];
  isLoading: boolean;
};

const initialState: State = {
  messages: [],
  isLoading: false,
};

const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};
export default postReducer;
