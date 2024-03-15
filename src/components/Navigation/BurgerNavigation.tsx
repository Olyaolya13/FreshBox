import { NavigationData } from '../../utils/constants';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function BurgerNavigation() {
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontSize: 17,
      fontFamily: 'DMSans',
      fontWeightRegular: 500
    }
  });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const BurgerList = () => (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#f7f4ee',
        '& .MuiList-root ': {
          padding: '0'
        }
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['How It Works', 'Fruits', 'Contact us'].map(text => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              color: '#7E9648'
            }}
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  padding: '10px'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['My account', 'Cart'].map(text => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              color: '#AE1332'
            }}
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  padding: '10px'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button
          disableRipple
          variant="text"
          onClick={toggleDrawer(true)}
          sx={{
            color: '#3e3823',
            fontSize: '20px',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          {NavigationData.menu}
        </Button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {BurgerList()}
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
}
