import './ShopCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cart from '../../../assets/Cart.svg?react';
import { ShopCardData } from '../../../utils/constants';
import { Box } from '@mui/material';

interface ShopCardProps {
  count?: string;
  title?: string;
  image?: string;
  alt?: string;
  isHit?: boolean;
}

export default function ShopCard({ count, title, image, alt, isHit = false }: ShopCardProps) {
  return (
    <Card
      sx={{ maxWidth: 220, height: 290, borderRadius: 2, padding: '10px', position: 'relative' }}
    >
      {isHit && (
        <Box
          sx={{
            backgroundColor: '#FF8F52',
            width: '50px',
            height: '50px',
            borderRadius: 10,
            opacity: '.8',
            position: 'absolute',
            top: 0,
            right: 0
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: '#fff',
              fontFamily: 'DMSans',
              fontSize: '16px',
              textAlign: 'center',
              paddingTop: '15px',
              fontWeight: 700
            }}
          >
            {ShopCardData.hit}
          </Typography>
        </Box>
      )}
      <CardMedia component="img" height="200" image={image} alt={alt} sx={{ borderRadius: 2 }} />
      <CardContent sx={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ margin: '5px 0 0 0', fontFamily: 'DMSans', fontSize: '22px', textAlign: 'start' }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0, paddingTop: '20px', margin: 0 }}>
        <Typography
          gutterBottom
          component="p"
          sx={{
            padding: 0,
            margin: 0,
            fontFamily: 'Roboto',
            color: '#7d7d7d;',
            fontSize: '18px'
          }}
        >
          {count}$
        </Typography>
        <Button
          disableRipple
          size="small"
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '70px',
            '&:hover': {
              backgroundColor: 'transparent'
            },
            transition: 'opacity 0.3s linear'
          }}
        >
          <Cart className="card__icon" />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textTransform: 'none',
              color: '#FF8F52',
              fontSize: '15px',
              margin: 0,
              '&:hover': { opacity: '8' }
            }}
          >
            {ShopCardData.title}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
