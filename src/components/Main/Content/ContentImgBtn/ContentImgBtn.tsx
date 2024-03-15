import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import OrangeImg from '../../../../assets/ContentOrange.svg?react';
import StrawberryImg from '../../../../assets/ContentStrawberry.svg?react';
import BlueBettyImg from '../../../../assets/ContentBlueBerry.svg?react';
import AppleImg from '../../../../assets/ContentApple.svg?react';
import MelonImg from '../../../../assets/ContentMelon.svg?react';
import LimeImg from '../../../../assets/ContentLime.svg?react';

const images = [
  {
    component: <MelonImg />,
    title: 'Fruit',
    width: '31%'
  },
  {
    component: <StrawberryImg />,
    title: 'Berry',
    width: '31%'
  },
  {
    component: <LimeImg />,
    title: 'Fruit',
    width: '31%'
  },

  {
    component: <OrangeImg />,
    title: 'Fruit',
    width: '31%'
  },
  {
    component: <BlueBettyImg />,
    title: 'Berry',
    width: '31%'
  },

  {
    component: <AppleImg />,
    title: 'Fruit',
    width: '31%'
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 192,
  transition: theme.transitions.create('opacity'),
  [theme.breakpoints.down('sm')]: {},
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      border: '2px solid currentColor'
    }
  }
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity')
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 0.1,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  border: '1px solid currentColor',
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}));

export default function ButtonBaseDemo() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 620,
        width: '100%',
        gap: '10px'
      }}
    >
      {images.map((image, index) => (
        <ImageButton
          focusRipple
          key={index}
          style={{
            width: image.width
          }}
          sx={{
            borderRadius: '28px',
            overflow: 'hidden'
          }}
          onClick={() => handleClick()}
        >
          <ImageSrc>{image.component}</ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: theme => `calc(${theme.spacing(1)} + 6px)`
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
