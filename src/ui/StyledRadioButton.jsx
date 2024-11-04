import { Radio } from '@mui/material';
import React from 'react';

const StyledRadioButton = (props) => {
  return (
    <Radio
      {...props}
      sx={{
        color: 'primary',
        '&.Mui-checked': {
          color: 'primary',
        },
      }}
    />
  );
};


export default StyledRadioButton;
