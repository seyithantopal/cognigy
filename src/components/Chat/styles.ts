import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  chatboxWrapper: {
    backgroundColor: '#eee',
    padding: 10,
    /* height: '100%',
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden', */
  },
  textfieldWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  historyWrapper: {
    flex: '1 1 20%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
}));

export default useStyles;
