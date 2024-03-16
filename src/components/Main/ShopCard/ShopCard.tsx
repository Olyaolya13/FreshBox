import './ShopCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cart from '../../../assets/Cart.svg?react';
import { ShopCardData } from '../../../utils/constants';

interface ShopCardProps {
  count?: string;
  title?: string;
  image?: string;
  alt?: string;
}

export default function ShopCard({ count, title, image, alt }: ShopCardProps) {
  return (
    <Card sx={{ maxWidth: 220, height: 290, borderRadius: 2, padding: '10px' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={alt}
        sx={{ borderRadius: 2 }}
      ></CardMedia>
      <CardContent sx={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ margin: '5px 0 0 0', fontFamily: 'DMSans', fontSize: '22px', textAlign: 'start' }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0, paddingTop: '25px', margin: 0 }}>
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
            paddingLeft: '80px',
            '&:hover': {
              backgroundColor: 'transparent'
            }
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
              margin: 0
            }}
          >
            {ShopCardData.title}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
