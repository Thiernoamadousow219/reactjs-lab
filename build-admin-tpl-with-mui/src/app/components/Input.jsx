import React from 'react'
import { TextField, styled } from '@mui/material';

export function ButtonSave({label}) {
    return (
      <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  type="password"
                  fullWidth={true} 
                  required/>
    );
}

export const FormGroup = styled('div')({
  marginBottom: '32px',
  width: '80%'
});
