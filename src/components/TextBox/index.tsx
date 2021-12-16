import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import useStyles from './styles';

type Props = {
  onChangeText: (message: string) => void;
}

const TextBox: FC<Props> = ({ onChangeText }) => {
  const classes = useStyles();
  return (
    <TextField onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChangeText(e.target.value)} id="outlined-basic" label="Write a message..." variant="outlined" className={classes.textfield} />
  );
};

export default TextBox;
