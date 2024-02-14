import React, { useState, useEffect } from "react";
import { Button, Grid, Modal, Box, Typography } from "@mui/material";
import { UserContext } from "../../context/UserContext"
import { showIntractions} from "../../api";


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

function ShowModel({
   open,showData ,onClose}
) {
  

  console.log(showData,'showDatashowDatashowData')

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
  
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>InterAction</h2>
          <Grid display="grid" rowGap={4} >
            <div>
            <div>
  <p>id: {showData.id}</p>
  <p>Description: {showData.description}</p>
  <p>Type: {showData.date_time}</p>
  <p>Status: {showData.status}</p>
</div>
            </div>
          <Box display="flex" columnGap={2}>
            
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={()=> onClose()}
            >
              cancel
            </Button>
          </Box>
  
          </Grid>
         
        </Box>
      </Modal>
    );
  
}

export default ShowModel;
