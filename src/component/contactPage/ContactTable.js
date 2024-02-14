import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";

function ContactTable({  handleDelete ,handleEdit, contacts,fetchContactById }) {
  return (
    <TableContainer component={Paper}>
      <Table>
              <TableHead sx={{ backgroundColor: '#c0cbc6' }}>
          <TableRow>
            <TableCell style={{ textAlign: 'center' }}>Name</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Email</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Phone</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {contacts?.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Box display="flex" columnGap={2}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
         <TableBody>
          {Array.isArray(contacts) && contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell style={{ textAlign: 'center' }}>{contact?.name}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{contact?.email}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{contact?.phone}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <Box display="flex" columnGap={2} justifyContent="center">
                <Button
                    variant="text"
                    size="small"
                    onClick={
                      () => {
                        // handleOpenModel(),
                        fetchContactById(contact.id)
                      }
                    }
                  >
                    show
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
