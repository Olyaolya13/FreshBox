import './OrderSteps.css';
import OrderStepsCard from './OrderStepsCard/OrderStepsCard';
import { OrderStepsData, OrderStepsCardData } from '../../../utils/constants';
import { Typography, createTheme, ThemeProvider } from '@mui/material';

export default function OrderSteps() {
  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 15,
      fontWeightRegular: 400
    },
    palette: {
      primary: {
        main: '#121212'
      }
    }
  });
  return (
    <section className="steps">
      <ThemeProvider theme={theme}>
        <div className="steps__text">
          <Typography
            sx={{ fontSize: '40px', fontWeight: 500, lineHeight: '1.3em', width: '600px' }}
          >
            {OrderStepsData.title}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '1.3em',
              width: '490px',
              marginTop: '20px',
              color: '#7d7d7d'
            }}
          >
            {OrderStepsData.subtitle}
          </Typography>
          <Typography
            sx={{
              fontSize: '11px',
              lineHeight: '1.3em',
              width: '300px',
              marginTop: '10px',
              marginBottom: '40px',
              color: '#CDCDCC'
            }}
          >
            {OrderStepsData.info}
          </Typography>
        </div>
        <div className="steps__card">
          {OrderStepsCardData.title.map((title, index) => (
            <OrderStepsCard
              key={index}
              title={title}
              text={OrderStepsCardData.text[index]}
              tooltip={OrderStepsCardData.tooltip[index]}
              backgroundColor={OrderStepsCardData.backgroundColor[index]}
            />
          ))}
        </div>
      </ThemeProvider>
    </section>
  );
}
