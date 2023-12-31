/*student ID:104249085
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Buttons from './buttons';

export default function AlertDialog({infomsg, confirmmsg, icon, label}) { //accepts these parameters
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {<Buttons onClick={handleClickOpen} icon={icon} label={label}/>} 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alertmsg"
      >
        <DialogTitle id="alertmsg">
          {infomsg} {/*msg that comes up with the popup */}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>{confirmmsg}</Button> {/* clickable button that user clicks to close */}
        </DialogActions>
      </Dialog>
    </div>
  );
}