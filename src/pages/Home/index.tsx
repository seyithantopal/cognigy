import React, { FC } from 'react';
import Chat from '../../components/Chat';
import useStyles from './styles';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Chat />
    </div>
  );
};

export default Home;
