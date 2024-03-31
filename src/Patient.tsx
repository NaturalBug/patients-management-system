import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const Patient = (props: { name: string; onClick: () => void }) => {
  return (
    <ListItem alignItems="flex-start" onClick={props.onClick}>
      <ListItemAvatar>
        <Avatar alt={props.name} />
      </ListItemAvatar>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};

export default Patient;
