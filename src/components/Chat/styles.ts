import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: '#eee',
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
