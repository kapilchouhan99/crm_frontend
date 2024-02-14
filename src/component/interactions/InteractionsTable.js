import React from "react";
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

function InteractionsTable({ handleDelete, handleEdit, interactions, showInterAction,handleOpenModel}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#c0cbc6' }}>
          <TableRow>
            <TableCell style={{ textAlign: 'center' }}>Description</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Date</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Type</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Status</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(interactions) && interactions.map((interaction) => (
            <TableRow key={interaction?.id}>
              <TableCell style={{ textAlign: 'center' }}>{interaction?.description}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{interaction?.date_time}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{interaction?.interaction_type}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{interaction?.status}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <Box display="flex" columnGap={2} justifyContent="center">
                <Button
                    variant="text"
                    size="small"
                    onClick={
                      () => {
                        // handleOpenModel(),
                        showInterAction(interaction.id)
                      }
                    }
                  >
                    show
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleEdit(interaction.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleDelete(interaction.id)}
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

export default InteractionsTable;
