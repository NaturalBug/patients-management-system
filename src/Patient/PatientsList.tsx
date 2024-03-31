import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Patient from "./Patient";
import OrderDialog from "../Order/OrderDialog";
import { useState } from "react";
import React from "react";

const PatientsList = () => {
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const handleOrderDialogOpen = () => {
    setOrderDialogOpen(true);
  };

  const handleOrderDialogClose = () => {
    setOrderDialogOpen(false);
  };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        <Patient name="Remy Sharp" onClick={handleOrderDialogOpen} />
        <Divider variant="inset" component="li" />
        <Patient name="Travis Howard" onClick={handleOrderDialogOpen} />
        <Divider variant="inset" component="li" />
        <Patient name="Oui Oui" onClick={handleOrderDialogOpen} />
        <Divider variant="inset" component="li" />
        <Patient name="Bianca Shortle" onClick={handleOrderDialogOpen} />
        <Divider variant="inset" component="li" />
        <Patient name="Alaric Ramos" onClick={handleOrderDialogOpen} />
      </List>
      <OrderDialog open={orderDialogOpen} onClose={handleOrderDialogClose} />
    </>
  );
};

export default PatientsList;
