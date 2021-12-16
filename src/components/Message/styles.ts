import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  chat: {
    flex: '1 1 auto',
    maxWidth: '40%', /* this will make it not exceed 80% and then wrap */
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 1.3,
  },
  theirs: {
    alignSelf: 'flex-start',
    backgroundColor: '#4d38a3',
    color: '#fff',
  },
  mine: {
    alignSelf: 'flex-end',
    backgroundColor: '#406e7d',
    color: '#fff',
  },
}));

export default useStyles;
