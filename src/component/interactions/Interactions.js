import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Grid } from "@mui/material";
import Header from "../Header";
import DeleteModel from "./deleteModel";
import ShowModel from "./showModel"
import { UserContext } from "../../context/UserContext";
import { deleteIntractions, fetchIntractions,showIntractions } from "../../api";
import InteractionsTable from "./InteractionsTable";
import InteractionForm from "./InteractionForm";
import Toaster from '../ToasterMessage';
{}


function InteractionsPage() {
  const [contactToEdit, setContactToEdit] = useState();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const { user } = useContext(UserContext)
  const [interactions, setInteractions] = useState();
  const [toasterOpen, setToasterOpen] = useState(false);
  const [message, setMessage] = useState(null); 
  const [showData, setShowData] = useState('');
  const [openModel, setOpenModel] = useState(false)
  const [close,setClose]=useState(false);


  useEffect(()=>{
    if(showData){

      setOpenModel(true) 
    }
  },[showData])

  useEffect(() => {
    fetchData();
  }, [user, contactToEdit, open]);
  const fetchData = async () => {
    try {
      if (user?.customer?.id) {
        const response = await fetchIntractions(user?.customer?.id);
        setInteractions(response.data);
      }
    } catch (error) {
      setToasterOpen(true)
      setTimeout(() => {
        setToasterOpen(false)
        setMessage('')
      }, 3000)
      setMessage(error.response.data.error);
      console.error("Error fetching interactions:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (user?.customer?.id) {
        await deleteIntractions(id);
        setInteractions(interactions.filter((contact) => contact.id !== id));
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

  const handleEdit = (id) => {
    const contactToEdit = interactions.find((contact) => contact.id === id);
    setContactToEdit(contactToEdit);
    setOpen(true);
  };

  const onDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true)
  }

  const showInterAction=async (id)=>{
    try {
      if (user?.customer?.id) {
        const data = await showIntractions(id);
        setShowData(data.data);
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


  const handleClose = ()=>{
    setOpenModel(false)
    setShowData('')
  }

  const handleOpenModel =()=>{
    setOpenModel(true)
  }


  return (
    <div>
      <Header />
      <Container component="main" maxWidth="lg" >
        <Toaster open={toasterOpen} message={message} />
        <Grid display="grid" rowGap={6}>
          <h2>Interactions</h2>
          <Grid textAlign="end">
            <Button variant="contained" onClick={() => {
              setOpen(true);
              setContactToEdit(null);
            }}>Add Interactions</Button>
          </Grid>
          <InteractionsTable handleDelete={onDelete} handleEdit={handleEdit} interactions={interactions}  showInterAction={showInterAction} handleOpenModel={handleOpenModel}/>
        </Grid>
      </Container>

      {open && (
        <InteractionForm
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
        <ShowModel
          open={openModel}
          onClose={handleClose}
          showData={showData}
        />
      )}
    </div>
  );
}

export default InteractionsPage;
