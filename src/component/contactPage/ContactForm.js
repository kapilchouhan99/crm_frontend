import React, { useState, useEffect } from "react";
import axios from "axios";
import Toaster from "../ToasterMessage";
import { TextField, Button, Grid, Modal, Box } from "@mui/material";
import { addContacts, editContacts } from "../../api";

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

function ContactForm({ contactToEdit, setContactToEdit, open, setOpen, id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [toasterOpen, setToasterOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setPhoneError("Invalid phone number");
      return;
    }
    try {
      const formData = new FormData();
      formData.append('contact[name]', name);
      formData.append('contact[email]', email);
      formData.append('contact[phone]', phone);
      if (contactToEdit) {
        await editContacts(contactToEdit?.id, id, formData);
        setContactToEdit(null);
      } else {
        await addContacts(id, formData);
      }
      setName("");
      setEmail("");
      setPhone("");
      handleClose();
    } catch (error) {
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage("Error submitting contact:");
      console.error("Error submitting contact:", error);
    }
  };
  const validatePhone = (phoneNumber) => {
    // Regular expression to match a phone number in the format XXX-XXX-XXXX
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
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
            <h2>{contactToEdit ? "Update Contact" : "Add Contact"}</h2>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="standard"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="standard"
                  fullWidth
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  variant="standard"
                  fullWidth
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  error={phoneError !== ""}
                  helperText={phoneError}
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
                    {contactToEdit ? "Update Contact" : "Add Contact"}
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

export default ContactForm;
