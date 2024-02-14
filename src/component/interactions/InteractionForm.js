import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Modal,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { addIntractions, editIntractions, fetchContacts } from "../../api";
import Toaster from "../ToasterMessage";

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

function InteractionForm({
  contactToEdit,
  setContactToEdit,
  open,
  setOpen,
  id,
}) {
  const [description, setDescription] = useState("");
  const [interactionType, setInteractionType] = useState("phone_call");
  const [status, setStatus] = useState("open");
  const [contactId, setContactId] = useState();
  const [contacts, setContacts] = useState([]);
  const [toasterOpen, setToasterOpen] = useState(false);
  const [message, setMessage] = useState(null);
  //const [dateTime, setDateTime] = useState();
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (id) {
        const response = await fetchContacts(id);
        setContacts(response.data.data.map(val => val.attributes));
      }
    } catch (error) {
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage(error.response.data.error);
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    if (contactToEdit) {
      setDescription(contactToEdit.description);
      setInteractionType(contactToEdit.interaction_type);
      setStatus(contactToEdit.status);
      setContactId(contactToEdit.contact_id);
    }
  }, [contactToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("interaction[description]", description);
      formData.append("interaction[date_time]", "2024-02-07 00:00:00 +0530");
      formData.append("interaction[interaction_type]", interactionType);
      formData.append("interaction[status]", status);
      formData.append("interaction[contact_id]", contactId);
      if (contactToEdit) {
        await editIntractions(contactToEdit?.id, formData);
        setContactToEdit(null);
      } else {
        await addIntractions(id, formData);
      }
      setDescription("");
      setInteractionType("");
      setStatus("");
      setContactId("");
      handleClose();
    } catch (error) {
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage(error.response.data.error);
      console.error("Error submitting contact:", error);
    }
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 120,
      },
    },
  };
  return (
    <>
      <Toaster open={toasterOpen} message={message} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <h2>{contactToEdit ? "Update Interaction" : "Add Interaction"}</h2>
            <Grid container spacing={2} justifyContent="center">
              
 <Grid item xs={12}>
                <FormControl fullWidth>
                   <InputLabel id="demo-contact-select-label">Contact</InputLabel>
                   <Select
                     label="Contact"
                     labelId="demo-contact-select-label"
                     id="demo-contact-select"
                     MenuProps={MenuProps}
                     value={contactId}
                     onChange={(e) => setContactId(e.target.value)}
                     required
                   >
                     {contacts.map((val) =>
                       <MenuItem value={val.id}>{val.name}</MenuItem>
                    )}
                   </Select>
                 </FormControl>
               </Grid> 

            
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    interaction Type
                  </InputLabel>
                  <Select
                    label="interaction Type"
                    //labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={interactionType}
                    onChange={(e) => setInteractionType(e.target.value)}
                    required
                  >
                    <MenuItem value="phone_call">Phone</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-status-select-label">Status</InputLabel>
                  <Select
                    label="Status"
                    labelId="demo-status-select-label"
                    id="demo-status-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="close">Close</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}> 
  <TextField
    label="Description"
    variant="outlined"
    fullWidth
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
  />
</Grid>
              <Grid item xs={12}>
                <Box display="flex" columnGap={2}>
                  <Button variant="outlined" size="small" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    {contactToEdit ? "Update Interaction" : "Add Interaction"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default InteractionForm;
