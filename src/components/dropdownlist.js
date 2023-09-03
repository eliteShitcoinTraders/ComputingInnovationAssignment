/*student ID:104249085
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList({datagrid, icon, heading}) //accepts datagrid icon and heading=(string))
{
  const [open, setOpen] = React.useState(true);
  const handleClick = () => //function when user clicks on button is pressed changes state
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
           
      <ListItemButton onClick={handleClick}> {/*calls handleclick function */}
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
            {datagrid}     {/*accepts a datagrid to be displayed when list is dropped*/}
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}