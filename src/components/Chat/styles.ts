import { makeStyles } from '@mui/styles';
import { COLOR_CHAT_BACKGROUND } from '../../utils/constants/color';

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
