import Card from '@mui/material/Card';
import './PostCard.css';
import { createTheme, ThemeProvider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import PostAvatar from '../../../../assets/PostAvatar.svg?react';
import SubmitBtn from '../../../SubmitBtn/SubmitBtn';
import CardLike from '../../CardLikeCount/CardLikeCount';

interface PostCardProps {
  title?: string;
  data?: string;
  image?: string;
  alt?: string;
  description?: string;
  name?: string;
  countLike?: number;
  onClick?: (count: number) => void;
}

export default function PostCard({
  title,
  data,
  image,
  alt,
  description,
  name,
  countLike,
  onClick
}: PostCardProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'DMSans',
      fontSize: 17,
      fontWeightMedium: 500
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: 345, borderRadius: 2, padding: '10px', height: 450, marginTop: '50px' }}
      >
        <div className="post-card__content">
          <PostAvatar />
          <Typography sx={{ color: '#12121' }}>{name}</Typography>
          <Typography sx={{ color: '#7d7d7d', fontSize: '14px' }}>{data}</Typography>
        </div>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={alt}
          sx={{ marginTop: '10px', borderRadius: 1 }}
        />
        <CardContent
          sx={{
            padding: '10px 0 32px 0',
            height: '130px',
            overflow: 'hidden',
            whiteSpace: 'wrap',
            textOverflow: 'ellipsis'
          }}
        >
          <Typography
            sx={{ color: '#12121', textAlign: 'start', fontSize: '15px', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: '#7d7d7d',
              fontSize: '13px',
              textAlign: 'start',
              marginTop: '10px'
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            padding: '0',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '10px',
            marginRight: '10px'
          }}
        >
          <CardLike countLike={countLike} onClick={onClick} />
          <SubmitBtn height="30px" title="Read more" />
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
