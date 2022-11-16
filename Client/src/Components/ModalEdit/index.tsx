import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalEdit({activeProduct, setActiveProduct}: any) {

  const handleClose = () => {
    setActiveProduct({...activeProduct, activeModal: false})
  };

  return (
    <div>
      <Dialog open={activeProduct} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Preço"
            type="number"
            fullWidth
            variant="standard"
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Categoria"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Excluir</Button>
          <Button onClick={handleClose}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
