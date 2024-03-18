import { useState } from 'react';
import { Typography, createTheme, ThemeProvider, Rating, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

interface CommentCardProps {
  user?: string;
  text?: string;
}

export default function CommentCard({ user, text }: CommentCardProps) {
  const [value, setValue] = useState<number | null>(2);

  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 18,
      fontWeightRegular: 400
    },
    palette: {
      primary: {
        main: '#121212'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          '& > legend': { mt: 2 },
          backgroundColor: '#fff',
          width: '350px',
          height: '200px',
          padding: '20px',
          borderRadius: 1
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Avatar style={{ width: '58px', height: '58px' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              marginLeft: '46px'
            }}
          >
            <Typography sx={{ marginTop: '10px' }}>{user}</Typography>
            <Typography
              sx={{
                marginTop: '10px',
                marginBottom: '10px',
                height: '115px',
                textAlign: 'start',
                overflow: 'hidden',
                fontSize: '14px'
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Rating
          name="half-rating"
          precision={0.5}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
