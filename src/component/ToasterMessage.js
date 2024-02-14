import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Toaster({open=false,message}) {

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        // onClose={handleClose}
        message={message}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      />
    </div>
  );
}
