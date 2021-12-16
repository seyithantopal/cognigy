import React from 'react';
import TextField from '@mui/material/TextField';
import useStyles from './styles';

const TextBox = () => {
  const classes = useStyles();
  return (
    <TextField id="outlined-basic" label="Write a message..." variant="outlined" className={classes.textfield} />
  );
};

export default TextBox;
