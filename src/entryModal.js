import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';


export default function EntryModal({ openModal, setOpenModal, handleEdit, handleCreate, id, title, text }) {
  const [currTitle, setTitle] = useState(id ? title : '');
  const [currText, setText] = useState(id ? text : '');

  const handleSubmit = () => {
    if (id) {
      handleEdit(id, currTitle, currText);
    } else handleCreate(currTitle, currText)
    setOpenModal(false);
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog open={openModal} fullWidth={true}>
        <DialogTitle>{`${id ? 'Edit' : 'Write'} Blog`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${id ? 'Edit' : 'Add'} Title`}</DialogContentText>
          <TextField
            autoFocus
            fullWidth
            id='title'
            defaultValue={currTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DialogContentText>{`${id ? 'Edit' : 'Add'} Text`}</DialogContentText>
          <TextField
            // autoFocus
            fullWidth
            multiline
            id='text'
            value={currText}
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>{`Submit ${id ? 'Edit' : 'Blog'}`}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
