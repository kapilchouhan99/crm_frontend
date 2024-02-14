import React, { useState, useEffect, useContext } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import { Button, Container, Grid } from "@mui/material";
import Header from "../Header";
import DeleteModel from "./deleteModel";
import Toaster from "../ToasterMessage";
import { UserContext } from "../../context/UserContext";
import { deleteContacts, fetchContacts,showContact } from "../../api";
import ShowContactModel from "./showContactModel";

function ContactPage() {
  const [contactToEdit, setContactToEdit] = useState();
  const [toasterOpen, setToasterOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const handleOpen = () => setOpen(true);
  const { user } = useContext(UserContext)
  const [message, setMessage] = useState(null);
  const [contacts, setContacts] = useState();
  const[showCntact,setShowCntact]=useState('');
  const [openModel, setOpenModel] = useState(false)

  useEffect(()=>{
    if(showCntact){

      setOpenModel(true) 
    }
  },[showCntact])
  useEffect(() => {
    fetchData();
  }, [user, open]);

  const fetchData = async () => {
    try {
      if (user?.customer?.id) {
        const response = await fetchContacts(user?.customer?.id);
        setContacts(response.data.data?.map(val => val.attributes));
        setToasterOpen(true)
        setTimeout(() => {
          setToasterOpen(false)
          setMessage('')
        }, 3000)
        setMessage("Contacts Fetched Successfully!!");
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
  const handleDelete = async (id) => {
    try {
      if (user?.customer?.id) {
        await deleteContacts(id, user?.customer?.id);
        setContacts(contacts.filter((contact) => contact.id !== id));
        setOpenDelete(false);
        setDeleteId(null);
      }
    } catch (error) {
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage(error.response.data.error);
      console.error("Error deleting contact:", error);
    }
  };

  const fetchContactById=async (id)=>{
    try {
      if (user?.customer?.id) {
        const data = await showContact(id);
        setShowCntact(data.data.data);
      }
    } catch (error) {
      console.log(error, 'errro')
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage(error.data.data.error);
      console.error("Error fetching interactions:", error);
    }
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setContactToEdit(contactToEdit);
    setOpen(true);
  };

  const onDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true)
  }
  const handleOpenModel =()=>{
    setOpenModel(true)
  }

   const handleClose = ()=>{
    setOpenModel(false)
    setShowCntact('')
  }
  return (
    <div>
      <Header />
      <Toaster open={toasterOpen} message={message}/>
      <Container component="main" maxWidth="lg" >
        <Grid display="grid" rowGap={6}>
          <h2>Contact Page</h2>
          <Grid textAlign="end">
            <Button variant="contained" onClick={() => { handleOpen(); setContactToEdit(null) }}>Add Contact</Button>
          </Grid>
          <ContactTable handleDelete={onDelete} handleEdit={handleEdit} contacts={contacts} fetchContactById={fetchContactById}/>
        </Grid>
      </Container>

      {open && (
        <ContactForm
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
          open={open}
          setOpen={setOpen}
          id={user?.customer?.id}
        />
      )}
      {openDelete && (
        <DeleteModel
          handleClose={() => { setOpenDelete(false); setDeleteId(null) }}
          open={openDelete}
          handleSubmit={() => handleDelete(deleteId)}
        />
      )}
      {(
        <ShowContactModel
          open={openModel}
          onClose={handleClose}
          showCntact={showCntact}
        />
      )}
    </div>
  );
}

export default ContactPage;
