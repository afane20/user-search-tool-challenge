import React, {useState} from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Styles
import styles from './DialogShare.module.css';
//icons
import { MdOutlineContentCopy } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';

export default function DialogShare(props) {

  const { search } = props;

  let param = encodeURI(search);
  let link = window.location.origin+'/'+param;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyTextToClipboard = async () => {
    navigator.clipboard.writeText(link);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'  >
        <DialogTitle>Share Link</DialogTitle>
        <DialogContent style={{ paddingTop: 20, paddingBottom: 60 }}  >
          <DialogContentText style={{marginBottom: 20}}>
            Use our link to share search.
          </DialogContentText>
          <div className={styles.row}>
            <TextField
              fullWidth
              label="Link"
              hiddenLabel
              size="small"
              value={link}
            />
            <Tooltip title={"Copied to clipboard!"} arrow leaveDelay={1500}>
             <Button variant="outlined" onClick={copyTextToClipboard} >
              <MdOutlineContentCopy/>
            </Button>
            </Tooltip>
            
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}