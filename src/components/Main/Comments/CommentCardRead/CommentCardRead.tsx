import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface CommentCardReadProps {
  title?: string;
  text?: string;
  readOnlyRatingValue?: string;
}

export default function CommentCardRead({
  title,
  text,
  readOnlyRatingValue
}: CommentCardReadProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 14,
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
          width: '250px',
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
            <Typography>{title}</Typography>
            <Typography
              sx={{
                marginTop: '10px',
                marginBottom: '10px',
                height: '115px',
                textAlign: 'start',
                overflow: 'hidden',
                fontSize: '12px'
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Rating name="half-rating" precision={0.5} value={{ readOnlyRatingValue }} readOnly />
      </Box>
    </ThemeProvider>
  );
}
