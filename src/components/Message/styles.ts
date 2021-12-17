import { makeStyles } from '@mui/styles';
import {
  COLOR_CHAT_MINE_BACKGROUND,
  COLOR_CHAT_MINE_TEXT,
  COLOR_CHAT_THEIRS_BACKGROUND,
  COLOR_CHAT_THEIRS_TEXT,
} from '../../utils/constants/color';

const useStyles = makeStyles(() => ({
  chat: {
    flex: '1 1 1',
    maxWidth: '40%',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 1.3,
    wordWrap: 'break-word',
  },
  theirs: {
    alignSelf: 'flex-start',
    backgroundColor: COLOR_CHAT_THEIRS_BACKGROUND,
    color: COLOR_CHAT_THEIRS_TEXT,
  },
  mine: {
    alignSelf: 'flex-end',
    backgroundColor: COLOR_CHAT_MINE_BACKGROUND,
    color: COLOR_CHAT_MINE_TEXT,
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: 5,
    borderRadius: 10,
  },
}));

export default useStyles;
