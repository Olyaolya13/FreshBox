import React, { useState } from 'react';
import { createTheme, ThemeProvider, Box, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

function samePageLinkNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function HeaderNavigation() {
  const [value, setValue] = useState(0);

  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 15,
      fontWeightMedium: 500
    },
    palette: {
      primary: {
        main: '#ff5722'
      }
    }
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>))
    ) {
      setValue(newValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          sx={{
            padding: 0
          }}
        >
          <Tab
            label="Home"
            to="/"
            component={Link}
            sx={{ color: '#1D1D1D', textTransform: 'none', '&:hover': { opacity: 0.8 } }}
            disableRipple
          />
          <Tab
            label="Shop"
            to="/shop"
            component={Link}
            sx={{ color: '#1D1D1D', textTransform: 'none', '&:hover': { opacity: 0.8 } }}
            disableRipple
          />
          <Tab
            label="Blog"
            to="/blog"
            component={Link}
            sx={{ color: '#1D1D1D', textTransform: 'none', '&:hover': { opacity: 0.8 } }}
            disableRipple
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
