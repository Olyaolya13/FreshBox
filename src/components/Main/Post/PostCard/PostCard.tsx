import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import PostAvatar from '../../../../assets/PostAvatar.svg?react';
import SubmitBtn from '../../../SubmitBtn/SubmitBtn';
import LikeGrey from '../../../../assets/LikeGrey.svg?react';

interface PostCardProps {
  title?: string;
  data?: string;
  image?: string;
  alt?: string;
  subtitle?: string;
  viewLike?: string;
}

export default function PostCard({ title, data, image, alt, subtitle, viewLike }: PostCardProps) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2 }}>
      <CardHeader avatar={<PostAvatar />} title={title} subheader={data} />
      <CardMedia component="img" height="194" image={image} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikeGrey />
        <Typography variant="body2" color="text.secondary">
          {viewLike}
        </Typography>
        <SubmitBtn height="30px" title="Read more" />
      </CardActions>
    </Card>
  );
}
