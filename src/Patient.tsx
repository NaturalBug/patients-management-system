import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const Patient = (props: { name: string}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={props.name} />
      </ListItemAvatar>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};

export default Patient;
