import './ShopCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Raspberry from '../../../assets/CardRaspberry.svg';
import Cart from '../../../assets/Cart.svg?react';
import { ShopCardData } from '../../../utils/constants';

interface ShopCardProps {
  count?: string;
  title?: string;
}

export default function ShopCard({ count, title }: ShopCardProps) {
  return (
    <Card sx={{ maxWidth: 250, height: 300, borderRadius: 5, padding: '10px' }}>
      <CardMedia
        component="img"
        height="200"
        image={Raspberry}
        alt="Raspberry"
        sx={{ borderRadius: 5 }}
      ></CardMedia>
      <CardContent sx={{ padding: 0 }}>
        <Typography gutterBottom variant="h5" sx={{ margin: 0 }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0, paddingTop: '33px' }}>
        <Typography gutterBottom component="p" sx={{ padding: 0, margin: 0 }}>
          {count}$
        </Typography>
        <Button size="small" disableRipple sx={{ display: 'flex', alignItems: 'center' }}>
          <Cart className="card__icon" />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: 'none', color: '#FF8F52', fontSize: '18px', margin: 0 }}
          >
            {ShopCardData.title}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
