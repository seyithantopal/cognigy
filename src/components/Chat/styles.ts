import { makeStyles } from '@mui/styles';
import { COLOR_CHAT_BACKGROUND, COLOR_SCROLLBAR_THUMB, COLOR_SCROLLBAR_THUMB_HOVER, COLOR_SCROLLBAR_TRACK } from '../../utils/constants/color';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: COLOR_CHAT_BACKGROUND,
  },
  chatboxWrapper: {},
  textfieldWrapper: {
    marginTop: 20,
  },
  historyWrapper: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-track': {
      background: COLOR_SCROLLBAR_TRACK,
    },
    '&::-webkit-scrollbar-thumb': {
      background: COLOR_SCROLLBAR_THUMB,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: COLOR_SCROLLBAR_THUMB_HOVER,
    },
    height: 500,
    gap: 3,
    padding: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
}));

export default useStyles;
