import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/LogoHeader.svg?react';
import { HeaderData } from '../../utils/constants';
import { Typography, createTheme, ThemeProvider } from '@mui/material';

interface LogoProps {
  fontSize?: number;
  width?: string;
  height?: string;
}

export default function Logo({ fontSize, width, height }: LogoProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: fontSize ? fontSize : 30
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Link
        to="/"
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
      >
        <LogoHeader
          style={{
            width: width ? width : '20px',
            height: height ? height : '20px',
            paddingRight: '5px'
          }}
        />
        <Typography sx={{ color: '#ff8f52', fontWeight: 700 }}>{HeaderData.friut}</Typography>
        <Typography sx={{ color: '#879f36', fontWeight: 700 }}>{HeaderData.box}</Typography>
      </Link>
    </ThemeProvider>
  );
}
