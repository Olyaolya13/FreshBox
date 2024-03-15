import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material';

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

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

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
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
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          sx={{ padding: 0 }}
        >
          <LinkTab
            label="Home"
            href="/"
            sx={{ color: '#1D1D1D', textTransform: 'none' }}
            disableRipple
          />
          <LinkTab
            label="Shop"
            href="/shop"
            sx={{ color: '#1D1D1D', textTransform: 'none' }}
            disableRipple
          />
          <LinkTab
            label="Blog"
            href="/blog"
            sx={{ color: '#1D1D1D', textTransform: 'none' }}
            disableRipple
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
