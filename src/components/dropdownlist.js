import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList({datagrid, icon, heading}) 
{
  const [open, setOpen] = React.useState(true);
  const handleClick = () => 
  {
    setOpen(!open);
  };

  return(
    <List
      sx=
      {
        { 
          width: '100%', bgcolor: 'background.paper' 
        }
      }
      component="nav">
           
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={heading} />
        {
        open ? <ExpandLess /> : <ExpandMore />
        }
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            {datagrid}     
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}