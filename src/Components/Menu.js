import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function MenuCheri() {
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <IconButton className ="bg-green-400"  color="neutral" onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 2,
              
              
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: 'pointer' }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton component={Link} to="/" sx={{ fontWeight: 'lg', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
              Home
            </ListItemButton>
            <ListItemButton component={Link} to="/Lookbook" sx={{ fontWeight: 'lg', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
              Lookbook
            </ListItemButton>

          </List>
        </Drawer>
      </React.Fragment>
    );
  }
