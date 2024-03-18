import './CardLike.css';
import { useState } from 'react';
import { CardActions, Typography } from '@mui/material';
import LikeGrey from '../../../assets/LikeGrey.svg?react';
import LikeOrange from '../../../assets/LikeOrange.svg?react';

interface CardLikeProps {
  countLike?: number;
  onClick?: (count: number) => void;
}

export default function LikeCard({ countLike = 0, onClick }: CardLikeProps) {
  const [isClickLike, setIsClickLike] = useState(false);
  const [countCardLike, setCountCardLike] = useState(countLike);

  const handleClickLike = () => {
    const newCount = isClickLike ? countCardLike - 1 : countCardLike + 1;
    setCountCardLike(newCount);
    setIsClickLike(!isClickLike);
    if (onClick) {
      onClick(newCount);
    }
  };

  return (
    <CardActions disableSpacing sx={{ padding: 0 }}>
      {isClickLike ? (
        <LikeOrange className="card-like" onClick={handleClickLike} />
      ) : (
        <LikeGrey className="card-like" onClick={handleClickLike} />
      )}

      <Typography sx={{ color: '#7d7d7d', fontSize: 16, marginLeft: '5px' }}>
        {countCardLike}
      </Typography>
    </CardActions>
  );
}
