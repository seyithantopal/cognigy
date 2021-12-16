import { combineReducers } from 'redux';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  message: messageReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
