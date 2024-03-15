import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface SubmitBtnProps {
  title?: string;
  width?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export default function SubmitBtn({
  title,
  width,
  backgroundColor,
  hoverBackgroundColor
}: SubmitBtnProps) {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    fontFamily: 'DMSans',
    fontSize: 14,
    textTransform: 'none',
    color: '#fff',
    backgroundColor: backgroundColor ? backgroundColor : '#FF8F52',
    '&:hover': {
      backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : '#FFAB7E'
    },
    width: width
  }));
  return (
    <ColorButton variant="contained" disableElevation>
      {title}
    </ColorButton>
  );
}
