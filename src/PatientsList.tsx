import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Patient from './Patient';

const PatientsList = () => {
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <Patient name="Remy Sharp"/>
      <Divider variant="inset" component="li" />
      <Patient name="Travis Howard" />
      <Divider variant="inset" component="li" />
      <Patient name="Oui Oui" />
      <Divider variant="inset" component="li" />
      <Patient name="Bianca Shortle" />
      <Divider variant="inset" component="li" />
      <Patient name="Alaric Ramos" />
    </List>
  );
}

export default PatientsList;