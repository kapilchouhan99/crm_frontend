import React from "react";
import { Button, Grid, Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 3,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DeleteModel({ handleClose, open, handleSubmit }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Delete Contact</h2>
        <Grid display="grid" rowGap={4} >
        <Typography variant="h6" component="h6">
          Are you sure to delete Contact
        </Typography>
        <Box display="flex" columnGap={2}>
          <Button variant="text" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleSubmit}
          >
            Delete
          </Button>
        </Box>

        </Grid>
       
      </Box>
    </Modal>
  );
}

export default DeleteModel;
