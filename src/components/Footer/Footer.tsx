import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Logo from '../Logo/Logo';
import './Footer.css';
import { Link } from 'react-router-dom';
import EmailIcon from '../../assets/FooterEmailIcon.svg?react';
import MobileIcon from '../../assets/FooterMobileIcon.svg?react';
import GeolocationIcon from '../../assets/FooterGeolocationIcon.svg?react';
import Instagram from '../../assets/InstagramIcon.svg?react';
import Facebook from '../../assets/FacebookIcon.svg?react';
import Youtube from '../../assets/YoutubeIcon.svg?react';

export default function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 16
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <footer className="footer">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'start'
          }}
        >
          <Logo fontSize={40} width="30px" height="30px" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '150px'
            }}
          >
            <Typography sx={{ color: '#fff' }}>Contact Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon className="footer__icon" />
              <Link to="mailto:info@freshBox.com" className="footer__link">
                info@freshBox.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MobileIcon className="footer__icon" />
              <Link to="tel:+71234567890" className="footer__link">
                +7 (123) 456-7890
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GeolocationIcon className="footer__icon" />
              <Link
                to="https://maps.google.com?q=123+Example+Street+City+Country"
                className="footer__link"
                target="_blank"
              >
                123 Example Street, City, Country
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ color: '#fff' }}>Follow Us</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '29px'
              }}
            >
              <Link to="https://facebook.com" style={{ paddingRight: '15px' }} target="_blank">
                <Facebook className="footer__social" />
              </Link>
              <Link to="https://instagram.com" style={{ paddingRight: '15px' }} target="_blank">
                <Instagram className="footer__social" />
              </Link>
              <Link to="https://youtube.com" target="_blank">
                <Youtube className="footer__social" />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: '#9F9F9F', fontSize: '13px', paddingTop: '50px' }}>
            &copy; 2024 FreshBox. All rights reserved
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
}
